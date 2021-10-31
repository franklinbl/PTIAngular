import { Component, OnInit } from '@angular/core';

interface Comment {
  id: number;
  numberComment: string;
  comment: string;
  userPhoto: string;
  like: boolean;
  dislike: boolean;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [
    {
      id: 0,
      numberComment: 'Comentario 1',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a justo nec tortor tempus molestie.',
      userPhoto: '../../../../assets/profile.jpg',
      like: false,
      dislike: false,
    },
    {
      id: 1,
      numberComment: 'Comentario 2',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a justo nec tortor tempus molestie.',
      userPhoto: '../../../../assets/profile.jpg',
      like: false,
      dislike: false,
    },
    {
      id: 2,
      numberComment: 'Comentario 3',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a justo nec tortor tempus molestie.',
      userPhoto: '../../../../assets/profile.jpg',
      like: false,
      dislike: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  likeDislike(comment: Comment, isLike: boolean): void {
    if (isLike) {
      comment.like = !comment.like;
      const index = this.comments.findIndex((x) => x.id === comment.id);
      this.comments.splice(index, 1, comment);
      if (comment.dislike) {
        comment.dislike = !comment.dislike;
      }
    } else {
      comment.dislike = !comment.dislike;
      const index = this.comments.findIndex((x) => x.id === comment.id);
      this.comments.splice(index, 1, comment);
      if (comment.like) {
        comment.like = !comment.like;
      }
    }
  }
}
