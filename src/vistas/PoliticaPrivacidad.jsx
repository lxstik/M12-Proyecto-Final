export default function PoliticaPrivacidad() {
    return (
        <>
            <main>
                <div className="container mt-5">
                    <h1 className="text-center font-weight-bold">Política de Privacidad</h1>
                    <div className="card shadow-lg p-4 mt-4">
                        <div className="text-center">
                            <img src="../public/logo.png" alt="Logo" style={{ width: '300px' }} />
                        </div>

                        <h2>Información que Recopilamos</h2>
                        <p className="text-justify">Podemos recopilar la siguiente información personal de nuestros usuarios:</p>
                        <ul>
                            <li><strong>Datos de identificación:</strong> Nombre, apellidos, dirección, correo electrónico y teléfono.</li>
                            <li><strong>Información de pago:</strong> Detalles de tarjetas de crédito/débito u otros métodos de pago.</li>
                            <li><strong>Datos de transacciones:</strong> Historial de compras, ventas y transacciones realizadas.</li>
                            <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, cookies y tecnologías similares.</li>
                        </ul>

                        <h2>Uso de la Información</h2>
                        <p className="text-justify">Utilizamos la información recopilada para:</p>
                        <ul>
                            <li>Facilitar la compra y venta de artículos de segunda mano.</li>
                            <li>Gestionar y mejorar nuestros servicios y experiencia del usuario.</li>
                            <li>Procesar pagos y transacciones.</li>
                            <li>Cumplir con obligaciones legales y regulatorias.</li>
                            <li>Enviar comunicaciones promocionales (cuando el usuario lo haya autorizado).</li>
                        </ul>

                        <h2>Compartición de Información</h2>
                        <p className="text-justify">No vendemos, alquilamos ni compartimos información personal con terceros, excepto en los siguientes casos:</p>
                        <ul>
                            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (pasarelas de pago, servicios de envío, etc.).</li>
                            <li>Para cumplir con obligaciones legales o responder a solicitudes de autoridades competentes.</li>
                            <li>En caso de una transacción comercial, como fusión o adquisición de la empresa.</li>
                        </ul>

                        <h2>Seguridad de la Información</h2>
                        <p className="text-justify">Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal contra acceso no autorizado, pérdida, uso indebido o divulgación.</p>

                        <h2>Derechos de los Usuarios</h2>
                        <p className="text-justify">Los usuarios tienen derecho a:</p>
                        <ul>
                            <li>Acceder, rectificar o eliminar su información personal.</li>
                            <li>Oponerse al tratamiento de sus datos o solicitar su limitación.</li>
                            <li>Retirar su consentimiento para el uso de sus datos en cualquier momento.</li>
                        </ul>
                        <p className="text-justify">Para ejercer estos derechos, pueden contactarnos a través de <strong>[correo electrónico de contacto]</strong>.</p>

                        <h2>Cookies y Tecnologías Similares</h2>
                        <p className="text-justify">Utilizamos cookies para mejorar la experiencia del usuario, analizar el tráfico y personalizar el contenido. Los usuarios pueden gestionar sus preferencias de cookies a través de la configuración del navegador.</p>

                        <h2>Cambios a esta Política de Privacidad</h2>
                        <p className="text-justify">Nos reservamos el derecho de modificar esta política en cualquier momento. Notificaremos cualquier cambio significativo a través de nuestro sitio web o por correo electrónico.</p>
                        <p className="text-center font-weight-bold">Fecha de última actualización: <strong>[Fecha]</strong></p>
                    </div>
                </div>
            </main>
        </>
    );
}