#version 450

layout(binding = 1) uniform sampler2D sTexture;

layout(location = 0) in vec2 texCoord;

layout(location = 0) out vec4 fragmentColor;

void main()
{
    fragmentColor = texture(sTexture, texCoord);
}
