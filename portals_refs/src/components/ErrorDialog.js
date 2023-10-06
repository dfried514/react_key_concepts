import { createPortal } from "react-dom";

const ErrorDialog = ({onClose}) => {
    return createPortal (
        <dialog open>
            <p>
                This form contains invalid values.  Please fix the problem.
            </p>
            <button onClick={() => document.querySelector('dialog').close()}>Okay</button>
        </dialog>,
        document.getElementById('dialogs')
    );
}

export default ErrorDialog;
