import { toast, Bounce } from 'react-toastify';
export function showError(msg) {
    toast.error(msg, {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}
export function showMessage(msg) {
    toast.success(msg, {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}