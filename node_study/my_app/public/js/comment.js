document.getElementById('commentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const commentInput = document.getElementById('commentInput').value;
    
    try {
        const response = await fetch('/add-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: commentInput }),
        });
        
        if (response.ok) {
            const commentList = document.getElementById('commentList');
            commentList.innerHTML = '/team-info';
            
            const newComments = await response.json();
            
            newComments.forEach((comment) => {
                const commentItem = document.createElement('li');
                commentItem.innerHTML = `
                    <div>${comment.date}</div>
                    <div>${comment.comment}</div>
                `;
                commentList.appendChild(commentItem);
            });
        } else {
            console.error('댓글을 전송할 수 없습니다.');
        }
    } catch (error) {
        console.error(error);
    }
});
