import React, { useEffect, useState } from 'react';
import styles from './UserCard.module.css';

interface UserCardProps {
  name: string;
  title: string;
  avatarUrl?: string;
  isOnline?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ 
  name, 
  title, 
  avatarUrl = '/images/avatar.jpg',
  isOnline = true 
}) => {
  return (
    <div className={styles.miniProfile}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={`${name}'s avatar`}/>
        <span className={`${styles.status} ${isOnline ? styles.online : ''}`} />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default UserCard; 