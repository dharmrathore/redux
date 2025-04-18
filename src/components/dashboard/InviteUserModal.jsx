import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import './InviteUserModal.css';
import { IoIosArrowDown } from "react-icons/io";


const userRoles = [
    {
        id: 1,
        name: 'Guest',
        value: 'guest',
    },
    {
        id: 2,
        name: 'Can comment',
        value: 'can_comment',
    },
    {
        id: 3,
        name: 'Can Edit',
        value: 'can_edit',
    },
    {
        id: 4,
        name: 'Full access',
        value: 'full_access',
    }
];

const dummyUsers = [
    {
        id: 1,
        name: 'Amanda Harvey',
        email: 'amanda@site.com',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        verified: true,
        status: 'active'
    },
    {
        id: 2,
        name: 'David Harrison',
        email: 'david@site.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        verified: false,
        status: 'pending'
    },
    {
        id: 3,
        name: 'Ella Lauda',
        email: 'Markvt@site.com',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        verified: true,
        status: 'active'
    },
    {
        id: 4,
        name: 'Bob Dean',
        email: 'bob@site.com',
        initials: 'BD',
        verified: false,
        status: 'pending'
    },
    {
        id: 5,
        name: 'Dev',
        email: 'dharmendrarathor@appypiellp.com',
        initials: 'DR',
        verified: true,
        status: 'active'
    }
];


const InviteUserModal = ({showModal, setShowModal}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [showRolesDropdown, setShowRolesDropdown] = useState(false);
    const [selectedRole, setSelectedRole] = useState(userRoles[0]);
    const [showUsersList, setShowUsersList] = useState(false);
    const [invitedUsers, setInvitedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchInputRef = useRef(null);
    const dropdownRef = useRef(null);
    
    // Filter users based on search term
    const filteredUsers = dummyUsers.filter(user => 
        !selectedUsers.find(selected => selected.id === user.id) && // Don't show already selected users
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUsers([]);
        setSearchTerm('');
        setShowUsersList(false);
    };

    const handleUserSelect = (user) => {
        setSelectedUsers([...selectedUsers, { 
            ...user, 
            role: selectedRole.name,
            roleValue: selectedRole.value,
            roleDescription: selectedRole.description,
            invitedAt: new Date().toISOString()
        }]);
        setSearchTerm('');
        setShowUsersList(false);
    };

    const handleRemoveUser = (userId) => {
        setSelectedUsers(prev => prev.filter(u => u.id !== userId));
    };

    const handleInvite = async () => {
        if (selectedUsers.length > 0) {
            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Add to invited users list
                const newInvites = selectedUsers.map(user => ({
                    ...user,
                    inviteStatus: 'pending',
                    invitedAt: new Date().toISOString()
                }));
                
                setInvitedUsers(prev => [...prev, ...newInvites]);
                console.log('Inviting users:', newInvites);
                
                // Clear selection and close modal
                handleCloseModal();
            } catch (error) {
                console.error('Error inviting users:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Handle clicks outside of dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUsersList(false);
                setShowRolesDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
        {showModal && (
            <>
            <div className="modal fade show" id="inviteUserModal" tabIndex="-1" role="dialog" aria-labelledby="inviteUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header">
                            <h3 className="fs-5 fw-semibold" id="inviteUserModalLabel">
                                Invite users
                            </h3>
                            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            {/* Search and Role Selection */}
                            <div className="d-flex gap-2 mb-4">
                                <div className="flex-grow-1 position-relative" ref={searchInputRef}>
                                    <input 
                                        type="text" 
                                        className="form-control border-0 bg-light" 
                                        placeholder="Search name or emails"
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setShowUsersList(true);
                                        }}
                                        onFocus={() => setShowUsersList(true)}
                                    />
                                    
                                    {/* Users Dropdown */}
                                    {showUsersList && filteredUsers.length > 0 && (
                                        <div className="dropdown-menu w-100 show shadow border-0 p-0">
                                            {filteredUsers.map(user => (
                                                <button 
                                                    key={user.id} 
                                                    className="dropdown-item py-2 px-3" 
                                                    onClick={() => handleUserSelect(user)}
                                                >
                                                    <div className="d-flex align-items-center gap-2">
                                                        {user.avatar ? (
                                                            <img src={user.avatar} alt={user.name} className="rounded-circle" width="32" height="32" />
                                                        ) : (
                                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{width: 32, height: 32}}>
                                                                {user.initials}
                                                            </div>
                                                        )}
                                                        <div className="d-flex flex-column">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <span className="fw-medium">{user.name}</span>
                                                                {user.verified && (
                                                                    <FaCheck className="text-primary" size={12} />
                                                                )}
                                                            </div>
                                                            <small className="text-muted">{user.email}</small>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="dropdown" ref={dropdownRef}>
                                    <button 
                                        className="btn btn-outline-secondary px-3" 
                                        type="button" 
                                        onClick={() => setShowRolesDropdown(!showRolesDropdown)}
                                    >
                                        {selectedRole.name}
                                        <IoIosArrowDown className='ms-2' size={16}/>
                                    </button>
                                    {showRolesDropdown && (
                                        <ul className="dropdown-menu shadow show border-0">
                                            {userRoles.map((role) => (
                                                <li key={role.id}>
                                                    <button 
                                                        type='button' 
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            setSelectedRole(role);
                                                            setShowRolesDropdown(false);
                                                        }}
                                                    >
                                                        <div>
                                                            <div className="fw-medium">{role.name}</div>
                                                            <small className="text-muted">{role.description}</small>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button 
                                    className={`btn ${selectedUsers.length > 0 ? 'btn-primary' : 'btn-secondary'} px-4 ${isLoading ? 'disabled' : ''}`}
                                    onClick={handleInvite}
                                    disabled={selectedUsers.length === 0 || isLoading}
                                >
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <>Invite {selectedUsers.length > 0 && `(${selectedUsers.length})`}</>
                                    )}
                                </button>
                            </div>

                            {/* Selected Users */}
                            {selectedUsers.length > 0 && (
                                <div className="mb-4">
                                    <div className="d-flex flex-wrap gap-2">
                                        {selectedUsers.map(user => (
                                            <div key={user.id} className="badge bg-light text-dark d-flex align-items-center gap-2 p-2">
                                                <div className="d-flex align-items-center">
                                                    {user.avatar ? (
                                                        <img src={user.avatar} alt={user.name} className="rounded-circle me-2" width="20" height="20" />
                                                    ) : (
                                                        <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{width: 20, height: 20, fontSize: '10px'}}>
                                                            {user.initials}
                                                        </div>
                                                    )}
                                                    <span>{user.name}</span>
                                                </div>
                                                <span className="text-muted">•</span>
                                                <span className="text-primary" title={user.roleDescription}>{user.role}</span>
                                                <button 
                                                    className="btn btn-link text-dark p-0 ms-2" 
                                                    onClick={() => handleRemoveUser(user.id)}
                                                >
                                                    <IoMdClose />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Invited Users List */}
                            {invitedUsers.length > 0 && (
                                <div className="mb-4">
                                        {/* Import Contacts Section */}
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="fs-6 fw-semibold mb-0">Invite users</h4>
                                            <button className="btn btn-link text-decoration-none d-flex align-items-center gap-2">
                                                <FcGoogle size={20} /> Import contacts
                                            </button>
                                        </div>
                                    <div className="invited-users-list">
                                        {invitedUsers.map(user => (
                                            <div key={user.id} className="d-flex align-items-center justify-content-between p-2 rounded bg-light mb-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    {user.avatar ? (
                                                        <img src={user.avatar} alt={user.name} className="rounded-circle" width="32" height="32" />
                                                    ) : (
                                                        <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{width: 32, height: 32}}>
                                                            {user.initials}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <span className="fw-medium">{user.name}</span>
                                                            {user.verified && <FaCheck className="text-primary" size={12} />}
                                                        </div>
                                                        <small className="text-muted d-block">{user.email}</small>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="badge bg-warning text-dark">{user.inviteStatus}</span>
                                                    <small className="text-muted d-block">{user.role}</small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        

                            {/* Link Settings Section */}
                            <div className="bg-light p-3 rounded">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="text-secondary">The public share</span>
                                        <button className="btn btn-link text-decoration-none p-0">link settings</button>
                                        <button className="btn btn-link text-decoration-none p-0" title="Help">
                                            <span className="rounded-circle border d-inline-flex align-items-center justify-content-center" style={{width: 20, height: 20}}>?</span>
                                        </button>
                                    </div>
                                    <button className="btn btn-light d-flex align-items-center gap-2">
                                        <IoMdClose /> Copy link
                                    </button>
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
