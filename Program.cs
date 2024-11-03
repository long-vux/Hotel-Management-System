using api.Converters;

// ... other using directives ...

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
    });

// ... other configurations ...

var app = builder.Build();

// ... middleware ...

app.MapControllers();

app.Run(); 