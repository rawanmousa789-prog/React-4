
export default function Modal({closeModal}) {
  return (
    <div className="parent-modal">
          <form className={`modal`}>
            <div className="close-btn" onClick={() => 
              closeModal()
              }
              >
              X
            </div>
            {/* <input onChange={(e) => {
              e.preventDefault();
              setResetPassword(e.target.value);
            }
            }
            required type="email" placeholder="Your Email" />
            <button
              onClick={(e) => {
                resetPassBTN(e);
              }}
            >
              Reset Password
            </button>
            {resetEmail && (
              <p className="reset-email">
                Check your email to reset your password.
              </p>
            )} */}
          </form>
        </div>
  )
}
