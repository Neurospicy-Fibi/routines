# Routine Variables Reference

This document describes all available variables that can be used in routine messages, action descriptions, and trigger effects. Variables are substituted at runtime with actual values from the routine instance and system context.

## Variable Syntax

All variables use the `${variableName}` syntax:

```json
{
  "type": "message",
  "message": "Good morning! It's ${NOW} and time to start your ${morningBeverage} ritual."
}
```

## Parameter Variables

These variables are automatically available based on the parameters collected during routine setup. The exact parameters depend on the specific routine template.

### Common Parameters (from example routines)
- `${naturalWakeTime}` - The user's natural wake-up time (e.g., "07:30")
- `${morningBeverage}` - User's preferred morning drink (e.g., "coffee", "tea", "water with lemon")
- `${energizingMusic}` - User's favorite energizing music genre or artist
- `${temperaturePreference}` - Temperature preference (e.g., "cool", "warm")
- `${naturalSleepTime}` - When the user naturally gets tired (e.g., "23:30")
- `${calmingSensory}` - Preferred calming sensory experience (e.g., "warm bath", "weighted blanket")
- `${sleepSound}` - Preferred sleep environment sound (e.g., "white noise", "fan", "silence")
- `${sleepTemperature}` - Temperature preference for sleep (e.g., "cool", "warm")

**Note**: The actual available parameters depend on the `setupSteps` defined in each routine template. Each `ParameterRequestStep` creates a variable with the specified `parameterKey`.

## System Variables

These variables are automatically provided by the system and don't need to be configured.

### Time Variables
- `${NOW}` - Current date and time in the user's timezone (e.g., "2024-12-25 14:30")
- `${TODAY}` - Current date in the user's timezone (e.g., "2024-12-25")
- `${TIME}` - Current time in the user's timezone (e.g., "14:30")

### Routine Lifecycle Variables (for TimeExpressions)
These variables are available in `TimeExpression` contexts (triggers, step scheduling) and can be used with ISO 8601 duration arithmetic:

- `${NOW}` - Current date and time (e.g., `${NOW}+PT15M` for 15 minutes from now)
- `${ROUTINE_START}` - When the routine instance was started (e.g., `${ROUTINE_START}+PT30M` for 30 minutes after routine start)
- `${PHASE_ENTERED}` - When the current phase was entered (e.g., `${PHASE_ENTERED}+PT5M` for 5 minutes after phase entry)
- `${PHASE_LEFT}` - When the current phase was left (e.g., `${PHASE_LEFT}+PT10M` for 10 minutes after phase exit)

**Note**: Event-based variables like `${PHASE_ENTERED}` and `${PHASE_LEFT}` are currently set to the current time as placeholders. Future enhancements will track actual event timestamps.

### User Information
- `${FRIEND_NAME}` - The user's name from their Signal profile

### Task Variables
- `${TODAYS_TASKS}` - List of today's incomplete tasks (e.g., "1. Organize books, 2. Go jogging")
- `${UPCOMING_TASKS}` - List of the next 5 incomplete tasks (e.g., "1. Organize books, 2. Go jogging, 3. Answer letter to Mike")
- `${TASK_COUNT}` - Number of incomplete tasks (e.g., "3")

### Calendar Variables
- `${TODAYS_APPOINTMENTS}` - List of today's appointments (e.g., "09:00 Doctor appointment, 14:00 Project meeting")
- `${UPCOMING_APPOINTMENTS}` - List of the next 5 upcoming appointments (e.g., "Today 09:00 Doctor, Tomorrow 14:00 Meeting")
- `${APPOINTMENT_COUNT}` - Number of appointments today (e.g., "2")

### Routine Context Variables
- `${ROUTINE_NAME}` - The name of the current routine (e.g., "ADHD Morning Activation")
- `${PHASE_NAME}` - The name of the current phase (e.g., "Dopamine Kickstart")
- `${STEP_NAME}` - The name/description of the current step

## Examples

### Morning Routine with Personalization
```json
{
  "type": "message",
  "message": "Good morning! It's ${TIME} and time to start your ${morningBeverage} ritual. You have ${TASK_COUNT} tasks waiting for you today."
}
```

### Task-Focused Routine
```json
{
  "type": "action",
  "message": "Let's review your day: ${TODAYS_APPOINTMENTS}. Your main tasks: ${TODAYS_TASKS}"
}
```

### Sleep Routine with Sensory Preferences
```json
{
  "type": "message",
  "message": "It's ${TIME} - time to start your ${calmingSensory} routine. Set your ${sleepSound} environment to help you wind down."
}
```

### TimeExpression Examples
```json
{
  "condition": {
    "type": "AT_TIME_EXPRESSION",
    "timeExpression": "${wakeUpTime}+PT15M"
  },
  "effect": {
    "type": "SEND_MESSAGE",
    "message": "Time for breakfast!"
  }
}
```

```json
{
  "condition": {
    "type": "AFTER_EVENT",
    "eventType": "ROUTINE_STARTED",
    "timeExpression": "${ROUTINE_START}+PT30M"
  },
  "effect": {
    "type": "SEND_MESSAGE",
    "message": "Your routine has been active for 30 minutes!"
  }
}
```

## Implementation Notes

- All time variables respect the user's timezone settings
- Task and appointment variables are limited to prevent overly long messages
- Parameter variables are only available if the routine template includes the corresponding `ParameterRequestStep`
- System variables are always available regardless of routine configuration
- Variable substitution happens at runtime, so values are current when the message is sent
- TimeExpression variables support ISO 8601 duration arithmetic (e.g., `PT15M`, `PT2H`, `PT1H30M`)
- Event-based variables in TimeExpressions are currently placeholders and will be enhanced in future versions 