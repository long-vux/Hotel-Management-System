using System.Text.Json;
using System.Text.Json.Serialization;

namespace api.Converters
{
  public class DateOnlyJsonConverter(string format = "yyyy-MM-dd") : JsonConverter<DateOnly>
  {
    private readonly string _format = format;

    public override DateOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
      var dateString = reader.GetString();
      if (DateOnly.TryParseExact(dateString, _format, out var date))
      {
        return date;
      }
      throw new JsonException($"Unable to convert \"{dateString}\" to DateOnly.");
    }

    public override void Write(Utf8JsonWriter writer, DateOnly value, JsonSerializerOptions options)
    {
      writer.WriteStringValue(value.ToString(_format));
    }
  }
}