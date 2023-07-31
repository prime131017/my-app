import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://th.bing.com/th/id/R.21baf95e143d909254c94997e7f551f0?rik=CQEW3J%2bj23UPYw&riu=http%3a%2f%2faroundpet.ru%2fwp-content%2fuploads%2fpochemu-koshki-smotryat-glaza-cheloveku.jpg&ehk=6662OUe%2fbbc3KxH1ZK3R2FtwhxvTsZl0zLOn3mSjNr4%3d&risl=&pid=ImgRaw&r=0',
                    followed: false,
                    fullName: 'Anatolii',
                    status: 'I am BOSS',
                    location: {
                        city: 'Mykolaiv',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 2,
                    photoUrl: 'https://th.bing.com/th/id/R.21baf95e143d909254c94997e7f551f0?rik=CQEW3J%2bj23UPYw&riu=http%3a%2f%2faroundpet.ru%2fwp-content%2fuploads%2fpochemu-koshki-smotryat-glaza-cheloveku.jpg&ehk=6662OUe%2fbbc3KxH1ZK3R2FtwhxvTsZl0zLOn3mSjNr4%3d&risl=&pid=ImgRaw&r=0',
                    followed: true,
                    fullName: 'Rymma',
                    status: 'I am BOSS-2',
                    location: {
                        city: 'Kyshyneu',
                        country: 'Moldova'
                    }
                },
                {
                    id: 3,
                    photoUrl: 'https://th.bing.com/th/id/R.21baf95e143d909254c94997e7f551f0?rik=CQEW3J%2bj23UPYw&riu=http%3a%2f%2faroundpet.ru%2fwp-content%2fuploads%2fpochemu-koshki-smotryat-glaza-cheloveku.jpg&ehk=6662OUe%2fbbc3KxH1ZK3R2FtwhxvTsZl0zLOn3mSjNr4%3d&risl=&pid=ImgRaw&r=0',
                    followed: false,
                    fullName: 'Ksenya',
                    status: 'I am BOSS-3',
                    location: {
                        city: 'Krotoszyn',
                        country: 'Poland'
                    }
                }
            ]
        )
    }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <dir>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </dir>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;