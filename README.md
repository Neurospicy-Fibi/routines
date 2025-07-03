# Routine Templates for Niva

This repository contains community-contributed routine templates for the [Niva](https://github.com/neurospicy/fibi) AI assistant, designed specifically for ADHD and autism support.

## Overview

Routines help neurodivergent users establish and maintain structured habits through:
- **Gradual progression** from simple to complex habits
- **Automatic phase transitions** based on completion milestones  
- **Intelligent scheduling** with parameter substitution
- **Contextual triggers** that provide encouragement and guidance

## Template Structure

Each routine template is a JSON file following the [routine schema](routine-schema.json). Key components:

### Basic Information
- `title`: Human-readable routine name
- `version`: Template version (e.g., "1.0")
- `description`: Brief explanation of the routine's purpose

### Setup Steps (Optional)
Questions asked during routine setup to personalize the experience:
```json
{
  "type": "parameter_request",
  "question": "What time would you like to wake up?",
  "parameterKey": "wakeUpTime", 
  "parameterType": "LOCAL_TIME"
}
```

### Phases
Sequential stages that activate based on conditions:
- **Immediate activation**: First phase starts right away
- **Completion-based**: Activate after completing previous phases
- **Time-based**: Activate after specific durations
- **Parameter-based**: Activate when user completes tasks

### Steps
Individual actions within phases:
- **Action steps**: Require user confirmation (`expectConfirmation: true`)
- **Message steps**: Send information to user
- **Parameter requests**: Collect additional information

### Time References  
Support both fixed times and parameter substitution:
- Fixed: `"07:00"` 
- Parameter-based: `"${wakeUpTime}"` or `"${wakeUpTime}+PT15M"`

### Triggers
Event-driven effects that provide feedback:
- **Send messages**: Encouragement and tips
- **Create tasks**: Connect to Niva's task system

## Example Templates

### 🌅 [Morning Planning Routine](../fibi/src/test/resources/morning-planning-routine.example.json)
Gradually builds from simple hydration and mindfulness to complete morning routine with planning and healthy breakfast.

**Progression**: 
1. **Building Morning Calm** → Simple water + chosen activity
2. **Adding Daily Planning** → Adds task planning (after 5 completions)  
3. **Complete Morning Routine** → Adds breakfast (triggered by task completion)

### 💧 [Daily Hydration Reminder](../fibi/src/test/resources/simple-hydration-routine.json)
Basic habit building with 4 daily water reminders and milestone celebrations.

### 🌙 [Evening Wind-Down](../fibi/src/test/resources/evening-wind-down-routine.json) 
Peaceful transition to sleep with device management, breathing, and relaxation.

### 🧘‍♀️ [Daily Meditation](../fibi/src/test/resources/simple-meditation-routine.json)
Minimalist meditation routine perfect for beginners.

## Phase Completion & Transitions

The system automatically tracks step completions and evaluates phase transition conditions:

- **Step Recognition**: When users confirm action steps
- **Phase Completion**: When all steps in a phase iteration are completed
- **Automatic Transitions**: New phases activate when conditions are met
- **Resource Cleanup**: Old phase schedulers are properly removed

### Transition Types

1. **`AFTER_PHASE_COMPLETIONS`**: Activate after completing a phase N times
   ```json
   {
     "type": "AFTER_PHASE_COMPLETIONS",
     "phaseTitle": "Building Morning Calm",
     "times": 5
   }
   ```

2. **`AFTER_DAYS`**: Activate after N days from routine start
   ```json
   {
     "type": "AFTER_DAYS", 
     "value": 7
   }
   ```

3. **`AFTER_PARAMETER_SET`**: Activate when user completes specific parameter task
   ```json
   {
     "type": "AFTER_PARAMETER_SET",
     "parameterKey": "breakfastReady"
   }
   ```

## Technical Implementation

### Automatic Loading
Templates are automatically loaded at application startup from any `*routine*.json` files in the classpath.

### Parameter Types
- `STRING`: Any text
- `LOCAL_TIME`: 24-hour time format (e.g., "07:30")
- `BOOLEAN`: true/false, yes/no, etc.
- `INT`: Whole numbers
- `FLOAT`: Decimal numbers  
- `DATE`: yyyy-MM-dd format

### Scheduling
- **Phase iterations**: Recurring based on `schedule` (DAILY, WEEKLY, etc.)
- **Step scheduling**: Based on `timeOfDay` with parameter substitution
- **Trigger conditions**: Time-based triggers for messages and tasks

## Contributing Templates

1. Create a new JSON file following the [schema](routine-schema.json)
2. Test your template with realistic user scenarios
3. Ensure progression feels natural for neurodivergent users
4. Submit a pull request with:
   - Template file
   - Brief description of the routine's purpose
   - Any special considerations for ADHD/autism users

### Design Guidelines

- **Start simple**: First phases should have minimal complexity
- **Gradual progression**: Each phase should feel like a natural next step
- **Clear timeframes**: Avoid overwhelming users with too many simultaneous prompts
- **Positive reinforcement**: Use encouraging language and celebrate milestones
- **Flexible timing**: Support parameter-based scheduling for individual preferences

## License

All routine templates in this repository are released under the [Creative Commons Attribution-ShareAlike 4.0](content-license.md) license, making them freely available for the community while ensuring contributions remain open.

## Support

For questions about creating or using routine templates:
- 📝 [Open an issue](https://github.com/neurospicy/fibi/issues)
- 💬 Join the [Niva community discussions](https://github.com/neurospicy/fibi/discussions)
- 📧 Contact the maintainers
