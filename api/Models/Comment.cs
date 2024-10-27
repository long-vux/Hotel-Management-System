using System;

namespace api.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public required string Title { get; set; } = string.Empty;
        public required string Content { get; set; } = string.Empty;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public int? CustomerId { get; set; }
    }
}

