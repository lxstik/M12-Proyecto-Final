import Footer from "../componentes/Footer";
import Header from "../componentes/Header";

export default function TerminosCondiciones() {
    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h1 className="text-center font-weight-bold">Términos y Condiciones</h1>
                    <div className="card shadow-lg p-4 mt-4">
                        <div className="text-center">
                            <img src="../public/logo.png" alt="Logo" style={{ width: '300px' }} />
                        </div>
                        <h2>Uso de la Plataforma</h2>
                        <p className="text-justify">Al utilizar nuestra plataforma, el usuario se compromete a:</p>
                        <ul>
                            <li>Ser mayor de edad y proporcionar información veraz.</li>
                            <li>No utilizar la plataforma para actividades ilegales o fraudulentas.</li>
                            <li>Respetar los derechos de otros usuarios y de terceros.</li>
                            <li>No publicar contenido ofensivo, engañoso o prohibido por la ley.</li>
                        </ul>

                        <h2>Registro y Cuentas de Usuario</h2>
                        <p className="text-justify">Para acceder a ciertos servicios, es necesario registrarse y crear una cuenta. El usuario es responsable de mantener la confidencialidad de sus credenciales y de cualquier actividad realizada en su cuenta.</p>

                        <h2>Publicación y Venta de Productos</h2>
                        <p className="text-justify">Los usuarios pueden publicar productos para su venta, asegurando que:</p>
                        <ul>
                            <li>Los artículos cumplen con nuestras políticas y no infringen derechos de terceros.</li>
                            <li>La descripción, imágenes y precio del producto sean exactos y veraces.</li>
                            <li>Se respete la legislación aplicable en materia de comercio electrónico.</li>
                        </ul>

                        <h2>Pagos y Transacciones</h2>
                        <p className="text-justify">Los pagos y transacciones se procesan a través de pasarelas de pago seguras. No nos hacemos responsables de fraudes, errores bancarios o problemas derivados de proveedores externos.</p>

                        <h2>Responsabilidades del Usuario</h2>
                        <p className="text-justify">El usuario acepta que el uso de la plataforma es bajo su propio riesgo. No nos responsabilizamos por:</p>
                        <ul>
                            <li>Productos defectuosos, falsificados o con información errónea.</li>
                            <li>Disputas entre compradores y vendedores.</li>
                            <li>Pérdida de datos, interrupciones en el servicio o accesos no autorizados.</li>
                        </ul>

                        <h2>Propiedad Intelectual</h2>
                        <p className="text-justify">Todos los contenidos de la plataforma, incluyendo logotipos, imágenes y textos, son propiedad de la empresa o de sus respectivos titulares, estando protegidos por leyes de propiedad intelectual.</p>

                        <h2>Modificaciones a los Términos</h2>
                        <p className="text-justify">Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor tras su publicación en la plataforma.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}