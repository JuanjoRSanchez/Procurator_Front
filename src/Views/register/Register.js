import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'
import FormComponentRegistro from './FormComponentRegistro'
import '../../assets/styles/principal.css'

export default function Registro(){

    return (
        <>
        <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                <FormComponentRegistro />
                </div>
            </div>
            <Footer />
        </>
    )
}