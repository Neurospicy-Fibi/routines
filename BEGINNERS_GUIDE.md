# 🚀 Beginner's Guide to Creating Routines

**Welcome to the Niva Routine Community!** This guide will help you create your first routine, even if you've never written code before.

## 🎯 What is a Routine?

A routine is a series of steps that Niva helps you follow to build healthy habits. Think of it like a friendly guide that:
- Reminds you to do things at the right time
- Celebrates your progress
- Adapts to your energy levels
- Helps you build habits step by step

## 🛠️ Your First Routine: Step by Step

### Step 1: Choose Your Goal

Start with something simple that you want to improve. For example:
- **"I want to drink more water"**
- **"I want to remember to take my medication"**
- **"I want to have a better morning routine"**

### Step 2: Break It Down

Think about what steps would help you achieve this goal. For example, for "drink more water":
1. **Morning reminder** - "Time to start your day with water!"
2. **Mid-morning check** - "How's your hydration going?"
3. **Afternoon reminder** - "Don't forget to drink water!"
4. **Evening check** - "Great job staying hydrated today!"

### Step 3: Create Your Routine File

1. Go to the `examples` folder
2. Create a new file with a `.json` extension (e.g., `my-first-routine.json`)
3. Copy this basic template:

```json
{
  "title": "My First Routine",
  "version": "1.0",
  "description": "A simple routine to help me [your goal]",
  "setupSteps": [
    {
      "type": "parameter_request",
      "question": "What time would you like to start this routine?",
      "parameterKey": "startTime",
      "parameterType": "LOCAL_TIME"
    }
  ],
  "phases": [
    {
      "title": "Getting Started",
      "steps": [
        {
          "type": "message",
          "message": "🌟 Time for your routine!",
          "timeOfDay": "${startTime}",
          "expectedDurationMinutes": 1,
          "expectConfirmation": true
        },
        {
          "type": "action",
          "message": "Take a moment to [your action]",
          "timeOfDay": "${startTime}+PT2M",
          "expectedDurationMinutes": 5,
          "expectConfirmation": true
        },
        {
          "type": "action",
          "message": "✅ Great job! You're building a healthy habit!",
          "timeOfDay": "${startTime}+PT8M",
          "expectedDurationMinutes": 1,
          "expectConfirmation": true
        }
      ],
      "schedule": "DAILY"
    }
  ],
  "triggers": [
    {
      "condition": {
        "type": "AFTER_PHASE_COMPLETIONS",
        "phaseTitle": "Getting Started",
        "times": 3
      },
      "effect": {
        "type": "SEND_MESSAGE",
        "message": "🎉 You've been doing this for 3 days! Your brain is building a new habit!"
      }
    }
  ]
}
```

### Step 4: Customize Your Routine

**Replace the placeholders:**
- `"My First Routine"` → Your routine name
- `"[your goal]"` → What you want to achieve
- `"[your action]"` → What you want to do
- `"startTime"` → A name for your time parameter

**Example for a water drinking routine:**

```json
{
  "title": "Hydration Helper",
  "version": "1.0",
  "description": "A simple routine to help me drink more water throughout the day",
  "setupSteps": [
    {
      "type": "parameter_request",
      "question": "What time would you like to start your hydration routine?",
      "parameterKey": "hydrationStartTime",
      "parameterType": "LOCAL_TIME"
    }
  ],
  "phases": [
    {
      "title": "Morning Hydration",
      "steps": [
        {
          "type": "message",
          "message": "💧 Good morning! Time to start your day with water!",
          "timeOfDay": "${hydrationStartTime}",
          "expectedDurationMinutes": 1,
          "expectConfirmation": true
        },
        {
          "type": "action",
          "message": "Take a moment to drink a glass of water",
          "timeOfDay": "${hydrationStartTime}+PT2M",
          "expectedDurationMinutes": 5,
          "expectConfirmation": true
        },
        {
          "type": "action",
          "message": "✅ Great job! You're taking care of your body!",
          "timeOfDay": "${hydrationStartTime}+PT8M",
          "expectedDurationMinutes": 1,
          "expectConfirmation": true
        }
      ],
      "schedule": "DAILY"
    }
  ],
  "triggers": [
    {
      "condition": {
        "type": "AFTER_PHASE_COMPLETIONS",
        "phaseTitle": "Morning Hydration",
        "times": 3
      },
      "effect": {
        "type": "SEND_MESSAGE",
        "message": "🎉 You've been hydrating for 3 days! Your brain is building a healthy habit!"
      }
    }
  ]
}
```

## 🎨 Making Your Routine Better

### Use Encouraging Language

**✅ Good:**
- "Time to take care of yourself!"
- "You're doing great!"
- "Every small step counts!"

**❌ Avoid:**
- "You should..."
- "You must..."
- "Don't forget to..."

### Add Personalization

Ask for user preferences in `setupSteps`:
```json
{
  "type": "parameter_request",
  "question": "What's your favorite way to relax?",
  "parameterKey": "relaxationMethod",
  "parameterType": "STRING"
}
```

Then use it in your messages:
```json
{
  "type": "action",
  "message": "Time to practice your ${relaxationMethod}",
  "timeOfDay": "20:00",
  "expectedDurationMinutes": 10,
  "expectConfirmation": true
}
```

### Add Celebrations

Include triggers to celebrate progress:
```json
{
  "condition": {
    "type": "AFTER_PHASE_COMPLETIONS",
    "phaseTitle": "Getting Started",
    "times": 7
  },
  "effect": {
    "type": "SEND_MESSAGE",
    "message": "🎉 One week of progress! You're building a lasting habit!"
  }
}
```

## 🧠 Neurodivergent-Friendly Tips

### Keep It Simple
- Start with 3-5 steps maximum
- Use clear, simple language
- Don't overwhelm with too many options

### Be Flexible
- Allow for different energy levels
- Don't make everything mandatory
- Provide gentle reminders, not demands

### Celebrate Progress
- Acknowledge every small win
- Focus on effort, not perfection
- Use positive, encouraging language

### Consider Different Needs
- Some people need more structure
- Others need more flexibility
- Include options for different preferences

## 🚀 Next Steps

### Test Your Routine
1. Save your file
2. Try it out in Niva
3. See how it feels
4. Make adjustments if needed

### Share Your Creation
1. Submit a pull request
2. Share your experience
3. Help others learn from your journey

### Keep Learning
- Read the [Routine Design Guide](ROUTINE_DESIGN_GUIDE.md)
- Look at other examples in the `examples` folder
- Ask questions in our community

## 💝 Remember

**You don't need to be perfect!** Every routine you create helps someone in our community. Even a simple 3-step routine can make a huge difference in someone's life.

**Your unique perspective matters!** What works for you might help others with similar challenges.

**We're here to help!** If you get stuck, ask questions, share your ideas, or just chat with our community.

---

**Ready to create your first routine?** 🧠✨

Start small, be kind to yourself, and remember: you're helping build a more supportive world for neurodivergent people! 