 const ModalZoom = ( foto ) => {
    return(
        <>
            <dialog open={!!foto}>
                <p>Exemplo do Mozilla</p>
                <form method="dialog">
                    <button>ok</button>
                </form>
            </dialog>
        </>
    )
 }
 export default ModalZoom