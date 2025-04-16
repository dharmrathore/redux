import React from 'react'

const InviteUserModal = ({showModal, setShowModal}) => {


    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>

        {showModal && (
            <>
            <div className="modal fade show" id="inviteUserModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="inviteUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="fs-6 fw-semibold modal-title" id="inviteUserModalLabel">Invite people</h3>
                            <button type="button" className="btn-close" onClick={handleCloseModal} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
            </>
        )}
        </>
    )
}

export default InviteUserModal
