import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Post({author, publishedAt, content }){

    const [coments, setComents] = useState(['Post muito bacana,hein!']) 
    const [newComentText,setNewComentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      });
    
      const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
      });

      function handleCreateCommnet(){
            event.preventDefault();
            setComents([...coments, newComentText]);
            setNewComentText('');
      }

      function handleNewCommentChange() {
        setNewComentText(event.target.value);
      }
      

    return(
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}   />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>
            <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p><a href="#">{line.content}</a></p>
                }
            })}
            </div>

            <form onSubmit={handleCreateCommnet} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name='comment' 
                    placeholder='Deixe um comentário'
                    value={newComentText}
                    onChange={handleNewCommentChange}/>
                <footer>
                    <button type='submit'>Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>
                {coments.map(coment =>{
                    return <Comment  content ={coment}/>
                })}
            </div>
       </article>
    )
}