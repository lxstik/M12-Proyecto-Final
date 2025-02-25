export default function Footer() {
    return (
        <>
            <footer class="bg-light py-4">
                <div class="container">
                    <div class="row align-items-start justify-content-between">
                        <div class="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h5>Contacto</h5>
                            <a href="#" class="d-block mt-2">Crea un ticket</a>
                            <a href="mailto:empresaventa@gmail.com" class="d-block">empresaventa@gmail.com</a>
                        </div>
                        <div class="col-md-4 text-center text-md-left mb-3 mb-md-0">
                            <h5>Enlaces</h5>
                            <a href="#" class="d-block">Sobre nosotros</a>
                            <a href="#" class="d-block">Trabaja con nosotros</a>
                            <a href="#" class="d-block">Aplicación móvil</a>
                            <a href="#" class="d-block">Política de privacidad</a>
                            <a href="#" class="d-block">Términos y condiciones</a>
                        </div>
                        <div class="col-md-4 text-center text-md-left">
                            <h5>Síguenos</h5>
                            <div class="d-flex justify-content-center justify-content-md-start">
                                <a href="#"><img src="./public/icons/instagram.png" alt="instagram" class="mx-2" style="width: 40px;"></a>
                                <a href="#"><img src="./public/icons/facebook.png" alt="facebook" class="mx-2" style="width: 40px;"></a>
                                <a href="#"><img src="./public/icons/youtube.png" alt="youtube" class="mx-2" style="width: 40px;"></a>
                                <a href="#"><img src="./public/icons/twitter.png" alt="twitter" class="mx-2" style="width: 40px;"></a>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-center">
                            <p class="mb-0">&copy; 2025 Empresa de Venta. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}