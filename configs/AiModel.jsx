const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
//   const fs = require("node:fs");
//   const mime = require("mime-types");
  
const apiKey = "AIzaSyDi47uMumsn-8t4dWVsU4dV5YpehU2MvMI";  // Replace with your Gemini API key
const genAI = new GoogleGenerativeAI(apiKey);

  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };
  

  export  const GenerateCourseLayout_Ai = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "generate A Course Tutorial on Following Detail with field as Course which has Name, Description , Along with Chapter Name , About , Duration : Category:'Prograaming' , Topic:Python ,Level:Basic , Duration:1 hours ,NoOfChapters:5, in JSON format\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"Course\": {\n    \"Name\": \"Python Fundamentals for Beginners\",\n    \"Description\": \"A comprehensive introductory course to Python programming, designed for individuals with no prior coding experience.  Learn the core concepts and build a solid foundation for future Python development.\",\n    \"Category\": \"Programming\",\n    \"Topic\": \"Python\",\n    \"Level\": \"Basic\",\n    \"Duration\": \"1 hours\",\n    \"NoOfChapters\": 5,\n    \"Chapters\": [\n      {\n        \"ChapterName\": \"Introduction to Python and Setup\",\n        \"About\": \"What is Python? Why learn Python? Setting up your development environment (Python installation, IDE, basic text editor).\",\n        \"Duration\": \"15 minutes\"\n      },\n      {\n        \"ChapterName\": \"Variables, Data Types, and Operators\",\n        \"About\": \"Understanding variables, common data types (integers, floats, strings, booleans), and basic arithmetic and comparison operators.\",\n        \"Duration\": \"20 minutes\"\n      },\n      {\n        \"ChapterName\": \"Control Flow: Conditional Statements (if, else, elif)\",\n        \"About\": \"Controlling the flow of your program using conditional statements.  Learn how to make decisions based on different conditions.\",\n        \"Duration\": \"15 minutes\"\n      },\n      {\n        \"ChapterName\": \"Control Flow: Loops (for and while)\",\n        \"About\": \"Repeating blocks of code using loops.  Understanding for loops for iterating over sequences and while loops for conditional repetition.\",\n        \"Duration\": \"15 minutes\"\n      },\n      {\n        \"ChapterName\": \"Functions: Creating and Calling Functions\",\n        \"About\": \"Defining and using functions to organize and reuse code.  Understanding function parameters and return values.\",\n        \"Duration\": \"15 minutes\"\n      }\n    ]\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // // TODO: Following code needs to be updated for client-side apps.
    // const candidates = result.response.candidates;
    // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
    //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
    //     const part = candidates[candidate_index].content.parts[part_index];
    //     if(part.inlineData) {
    //       try {
    //         const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
    //         fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
    //         console.log(`Output written to: ${filename}`);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }
    // console.log(result.response.text());
