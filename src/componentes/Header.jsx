export default function Header() {
    return (
        <>
            <header>
                <div class="container ">
                    <div class="row align-items-center justify-content-between py-2">
                        <div class="col-2 text-center">
                            <img src="./public/logo.png" alt="Logo" style="width: 70px;">
                        </div>
                        <div class="col-8">
                            <input type="text" class="form-control" placeholder="Buscar" style="width: 100%; border-radius: 30px;">
                        </div>
                        <div class="col-2 text-center">
                            <img src="./public/icons/cuenta.png" style="width: 70px;">
                                <a href="#">Usuario</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}