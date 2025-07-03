# Routine Design Guide: Creating Neurodivergent-Friendly Routines

## Welcome, Routine Designers!

This guide will help you create effective, evidence-based routines that truly support neurodivergent individuals. Whether you're designing for ADHD, autism, or other forms of neurodivergence, these principles will help you build routines that work *with* different brains rather than against them.

## Before You Start: Understanding Your Audience

### Key Questions to Consider:
- **Who is this routine for?** (ADHD, autistic, both, or general neurodivergent)
- **What specific challenge does it address?** (executive function, sensory regulation, sleep, transitions, etc.)
- **What strengths can we build upon?** (special interests, hyperfocus, pattern recognition, etc.)
- **What barriers might exist?** (time blindness, sensory sensitivities, executive dysfunction, etc.)

### Neurodivergent-First Design Principles:
1. **Assume Competence**: Neurodivergent individuals are capable and intelligent
2. **Honor Differences**: Work with natural tendencies, not against them
3. **Provide Choice**: Offer customization and multiple pathways
4. **Reduce Shame**: Use non-judgmental, supportive language
5. **Build on Strengths**: Leverage neurodivergent advantages and interests

## Step 1: Choose Your Focus Area

### High-Impact Areas for Neurodivergent Routines:

**Executive Function Support:**
- Working memory assistance
- Task initiation strategies
- Cognitive flexibility training
- Emotional regulation skills

**Sensory Regulation:**
- Daily sensory check-ins
- Overwhelm prevention
- Sensory diet integration
- Environment optimization

**Sleep and Circadian Support:**
- Delayed sleep phase accommodation
- Wind-down protocols
- Sensory sleep environment
- Racing thoughts management

**Transition and Change:**
- Task switching support
- Daily transition practice
- Change preparation strategies
- Flexibility building

**Habit Formation:**
- Habit stacking education
- Micro-habit development
- Dopamine optimization
- Behavioral momentum

## Step 2: Design Your Setup Questions

### Essential Parameter Types:

**Timing Parameters:**
```json
{
  "type": "parameter_request",
  "question": "What time do you naturally [wake up/feel tired/have energy]? (Honor your natural rhythm!)",
  "parameterKey": "naturalTime",
  "parameterType": "LOCAL_TIME"
}
```

**Sensory Preferences:**
```json
{
  "type": "parameter_request",
  "question": "What sensory experience helps you feel [calm/energized/focused]? (e.g., music, weighted blanket, fidget toy)",
  "parameterKey": "sensoryTool",
  "parameterType": "STRING"
}
```

**Individual Strengths:**
```json
{
  "type": "parameter_request",
  "question": "What's a special interest or topic you find fascinating?",
  "parameterKey": "specialInterest",
  "parameterType": "STRING"
}
```

**Existing Habits:**
```json
{
  "type": "parameter_request",
  "question": "What's one thing you already do consistently every day?",
  "parameterKey": "anchorHabit",
  "parameterType": "STRING"
}
```

### Question Design Best Practices:
- **Be Specific**: Ask about exact preferences, not generalizations
- **Normalize Differences**: Include validating language in parentheses
- **Offer Examples**: Help users understand what you're asking for
- **Avoid Judgment**: Don't assume what people "should" do
- **Honor Individual Needs**: Ask about their reality, not ideals

## Step 3: Structure Your Phases

### The 3-Phase Progressive Model:

#### Phase 1: Foundation Building (Week 1)
- **Goal**: Establish basic habit loop
- **Duration**: 5-15 minutes total
- **Focus**: Simple, consistent actions
- **Success Metric**: Daily completion for 7 days

#### Phase 2: Skill Integration (Weeks 2-3)
- **Goal**: Add complexity and supporting skills
- **Duration**: 15-30 minutes total
- **Focus**: Building on established foundation
- **Success Metric**: Consistent completion for 10-14 days

#### Phase 3: Mastery and Expansion (Week 4+)
- **Goal**: Full routine with advanced strategies
- **Duration**: 30-60 minutes (can be spread throughout day)
- **Focus**: Comprehensive skill application
- **Success Metric**: Long-term sustainability

### Phase Transition Conditions:
```json
{
  "condition": {
    "type": "AFTER_PHASE_COMPLETIONS",
    "phaseTitle": "Foundation Building",
    "times": 7
  }
}
```

## Step 4: Craft Your Steps

### Step Types and When to Use Them:

#### Message Steps:
- **Use for**: Education, encouragement, context-setting
- **Best practices**: Keep brief, use positive language, include emojis for visual appeal
```json
{
  "type": "message",
  "message": "🧠 Time to support your executive function! Let's start with a brain dump.",
  "timeOfDay": "09:00",
  "expectedDurationMinutes": 1,
  "expectConfirmation": true
}
```

#### Action Steps:
- **Use for**: Specific behaviors, skill practice, habit building
- **Best practices**: Be concrete, include duration estimates, explain the "why"
```json
{
  "type": "action",
  "message": "📝 Brain dump: Write down everything in your head using your ${captureMethod} (external working memory support)",
  "timeOfDay": "09:02",
  "expectedDurationMinutes": 5,
  "expectConfirmation": true
}
```

### Timing Strategies:

#### Fixed Times:
```json
"timeOfDay": "07:30"
```

#### Parameter-Based Times:
```json
"timeOfDay": "${wakeUpTime}+PT15M"
```

#### Flexible Scheduling:
- Use parameter-based timing when possible
- Build in buffer time for neurodivergent processing needs
- Consider energy levels throughout the day

### Duration Guidelines:
- **Foundation Phase**: 1-5 minutes per step
- **Integration Phase**: 3-10 minutes per step
- **Mastery Phase**: 5-20 minutes per step
- **Always be realistic**: Neurodivergent individuals often need more time

## Step 5: Create Meaningful Triggers

### Trigger Types and Purposes:

#### Educational Triggers:
```json
{
  "condition": {
    "type": "AFTER_PHASE_COMPLETIONS",
    "phaseTitle": "Foundation Building",
    "times": 3
  },
  "effect": {
    "type": "SEND_MESSAGE",
    "message": "🧠 Science insight: You're building neural pathways! Each repetition strengthens the connection between [habit] and [reward]."
  }
}
```

#### Encouragement Triggers:
```json
{
  "condition": {
    "type": "AFTER_PHASE_COMPLETIONS",
    "phaseTitle": "Foundation Building",
    "times": 7
  },
  "effect": {
    "type": "SEND_MESSAGE",
    "message": "🎉 One week complete! Your brain is learning this pattern. Ready for the next level?"
  }
}
```

#### Practical Support Triggers:
```json
{
  "condition": {
    "type": "AFTER_DURATION",
    "reference": "PHASE_ENTERED",
    "duration": "PT72H"
  },
  "effect": {
    "type": "SEND_MESSAGE",
    "message": "💡 Reminder: Consistency matters more than perfection. Your neurodivergent brain learns through repetition, not pressure."
  }
}
```

#### Task Creation Triggers:
```json
{
  "condition": {
    "type": "AFTER_PHASE_COMPLETIONS",
    "phaseTitle": "Mastery Phase",
    "times": 14
  },
  "effect": {
    "type": "CREATE_TASK",
    "taskDescription": "Create your personalized [skill] toolkit using your favorite strategies from this routine",
    "parameterKey": "skillToolkit",
    "expiryDate": "2025-12-31T23:59:59Z"
  }
}
```

## Step 6: Language and Communication

### Neurodivergent-Affirming Language:

#### DO Use:
- "Your ADHD/autistic brain" (neurodiversity-affirming)
- "This supports your nervous system" (educational)
- "Working with your natural tendencies" (strengths-based)
- "Your brain needs this" (validating)
- "This is how your neurodivergent mind works" (normalizing)

#### AVOID:
- "Fix your brain" or "overcome your ADHD/autism"
- "Normal people do this differently"
- "You should be able to..."
- "Try harder" or "just focus"
- Pathologizing language

### Tone Guidelines:
- **Supportive**: Like a knowledgeable friend, not a stern parent
- **Educational**: Explain the science behind recommendations
- **Validating**: Acknowledge that neurodivergent experiences are real and valid
- **Encouraging**: Celebrate small wins and progress
- **Flexible**: Remind users that adaptation is okay

## Step 7: Testing and Iteration

### Before Publishing:

#### Self-Review Checklist:
- [ ] Does this routine honor neurodivergent differences?
- [ ] Are the time estimates realistic for someone with executive dysfunction?
- [ ] Does the language feel supportive rather than demanding?
- [ ] Are there enough customization options?
- [ ] Do the phases build logically on each other?
- [ ] Are the triggers meaningful and encouraging?

#### Consider These Scenarios:
- What if someone has a bad day and can't complete the routine?
- What if someone's sensory needs change?
- What if someone is in a different time zone or has an irregular schedule?
- What if someone has co-occurring conditions (anxiety, depression, etc.)?

### Beta Testing:
- Share with neurodivergent community members for feedback
- Test with different neurotypes (ADHD, autistic, both)
- Gather feedback on language, timing, and usefulness
- Iterate based on real user experiences

## Common Pitfalls to Avoid

### 1. **Neurotypical Assumptions**
- Don't assume typical attention spans or processing speeds
- Don't expect linear progress or consistent performance
- Don't underestimate the impact of sensory factors

### 2. **One-Size-Fits-All Thinking**
- Neurodivergent individuals are highly diverse
- What works for one person may not work for another
- Always provide options and customization

### 3. **Perfectionism**
- Don't create routines that require flawless execution
- Build in flexibility for bad days and life changes
- Emphasize progress over perfection

### 4. **Ignoring Strengths**
- Don't focus only on deficits or challenges
- Leverage neurodivergent strengths like pattern recognition, hyperfocus, and creativity
- Include special interests and preferred activities

### 5. **Overwhelming Complexity**
- Start simple and build gradually
- Don't try to address every challenge at once
- Respect cognitive load limitations

## Example Routine Structure

Here's a template for a well-structured neurodivergent routine:

```json
{
  "title": "[Descriptive Name] for [Target Population]",
  "version": "1.0",
  "description": "A [evidence-based approach] routine designed for [specific neurodivergent population]. Addresses [main challenges] using [key strategies].",
  "setupSteps": [
    // 3-5 parameter requests covering timing, sensory preferences, strengths, and existing habits
  ],
  "phases": [
    {
      "title": "[Skill] Foundation",
      // 3-5 simple steps, 10-20 minutes total
    },
    {
      "title": "[Skill] Integration", 
      "condition": { /* after 7 completions */ },
      // 5-8 steps building on foundation, 20-40 minutes total
    },
    {
      "title": "Advanced [Skill] Mastery",
      "condition": { /* after 10-14 completions */ },
      // 8-12 comprehensive steps, 30-60 minutes total
    }
  ],
  "triggers": [
    // Educational triggers at 3, 7 completions
    // Encouragement triggers at phase transitions
    // Support reminders every 48-72 hours
    // Practical tasks at mastery milestones
  ]
}
```

## Resources for Routine Designers

### Recommended Reading:
- Research on executive function and ADHD
- Sensory processing and autism literature
- Habit formation and behavioral psychology
- Trauma-informed care principles
- Neurodiversity movement writings

### Community Resources:
- Neurodivergent-led organizations and advocacy groups
- Research institutions studying ADHD and autism
- Occupational therapy and behavioral therapy literature
- Online communities and forums for lived experience insights

## Final Thoughts

Creating effective routines for neurodivergent individuals is both an art and a science. It requires understanding research, honoring lived experiences, and maintaining flexibility and humility. Your work as a routine designer can genuinely improve lives by providing tools that work with neurodivergent brains rather than against them.

Remember: The goal is not to make neurodivergent people more "normal," but to help them thrive as their authentic selves while developing skills and systems that support their wellbeing and goals.

Thank you for contributing to a more neurodivergent-friendly world through thoughtful, evidence-based routine design! 