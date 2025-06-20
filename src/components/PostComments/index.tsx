import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');
    const [tempName, setTempName] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newComment = new Comment(comments.length, `${tempName}: ${tempComment}`);
    setTempComment('');
    setTempName('');
    setComments([...comments, newComment]);
    }

    return (
    <div>
        <ul className={styles['post-comments']}>
        {comments.map(({ comment, id }) => (
            <li className={styles['post-comment']} key={id} data-testid="comentario-item">
            <p className={styles['post-comment-content']}>{comment}</p>
            </li>
        ))}
        </ul>
        <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
        <input
            data-testid="input-nome"
            placeholder="Nome"
            value={tempName}
            onChange={e => setTempName(e.target.value)}
        />
        <textarea
            data-testid="input-comentario"
            placeholder="Comentário"
            value={tempComment}
            onChange={e => setTempComment(e.target.value)}
            required
        />
        <button type="submit" data-testid="botao-enviar">
            Comentar
        </button>
        </form>
    </div>
    );
};

export default Post;
