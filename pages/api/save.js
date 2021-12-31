import moment from 'moment'
import { fromBase64 } from '../../utils/base64'
import { GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../credentials.json'


const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A4:B4')

    const mostrarPromocaoCell = sheetConfig.getCell(3, 0)
    const textoPromocaoCell = sheetConfig.getCell(3, 1)

    let Cupom = ''
    let Promo = ''
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {

      Cupom = genCupom()
      Promo = textoPromocaoCell.value
    }


    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Sugestao: data.Sugestao,
      Nota: 5,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    })
    res.end(JSON.stringify({
      showCoupon: Cupom !== "",
      Cupom,
      Promo
    }))
  }
  catch (err) {
    console.log(err)
    res.end('error')
  }
}
