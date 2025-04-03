export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center justify-content-between py-2">
                        <div className="col-2 text-center">
                            <img src="./public/logo.png" alt="Logo" style={{ width: '70px' }} />
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder="Buscar" style={{ width: '100%', borderRadius: '30px' }} />
                        </div>
                        <div className="col-2 text-center">
                            <img src="./public/icons/cuenta.png" style={{ width: '70px' }} />
                            <a href="#">Usuario</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}