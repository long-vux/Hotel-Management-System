using api.Dtos.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMappers
    {
        public static CommentDto ToCommentDto(this Comment commentModel)
        {
            return new CommentDto
            {
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreatedOn = commentModel.CreatedOn,
                CustomerId = commentModel.CustomerId
            };
        }

        public static Comment ToCommentFromCreate(this CreateCommentDto commentDto, int customerId)
        {
            return new Comment
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
                CustomerId = customerId
            };
        }
    }
}