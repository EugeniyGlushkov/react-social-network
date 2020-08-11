import React from 'react';
import styles from "./users.module.css";
import userPhoto_default from "../../assets/images/user_default.png";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            <div>
                {pages.map(page =>
                    <span className={props.currentPage === page && styles.selectedPage}
                          onClick={(event) => props.onPageChanged(page)}>{page} </span>)
                }
            </div>
            {
                props.users.map(user => (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto_default}
                                         className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {user.followed === true
                                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'user.location.city'}
                                    </div>
                                    <div>
                                        {'user.location.country'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default Users;

