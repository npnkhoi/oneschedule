import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';



const ToPDF = (value) => {
    return (
        <PDFViewer>
            {value}
        </PDFViewer>
    )
}

/*export default class ToPDF extends Component {
    render() {
        return (
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
        )
    }
}*/

export default ToPDF
