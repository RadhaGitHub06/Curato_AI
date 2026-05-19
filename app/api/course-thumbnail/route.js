export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get("prompt") || "clean modern educational course thumbnail";
  const encodedPrompt = encodeURIComponent(prompt);
  const sourceUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=630&nologo=true`;

  try {
    const response = await fetch(sourceUrl, {
      headers: {
        Accept: "image/*",
      },
    });

    if (!response.ok) {
      throw new Error(`Thumbnail fetch failed with status ${response.status}`);
    }

    const imageBuffer = await response.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": response.headers.get("content-type") || "image/jpeg",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Course thumbnail generation failed:", error);

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/uploaded.svg",
      },
    });
  }
}