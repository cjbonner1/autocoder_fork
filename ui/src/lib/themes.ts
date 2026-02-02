/**
 * Theme Configuration for Autocoder
 *
 * Themes customize the look and feel of the Kanban board including:
 * - Agent names (crew members)
 * - Column titles
 * - Color palette
 * - Orchestrator name
 */

export interface Theme {
  id: string
  name: string
  description: string

  // Agent/crew names (index 0 = orchestrator in single-agent mode)
  orchestratorName: string
  agentNames: string[]

  // Kanban column titles
  columns: {
    pending: string
    inProgress: string
    testing: string
    complete: string
  }

  // Color palette (CSS custom properties)
  colors: {
    primary: string
    secondary: string
    accent: string
    success: string
    warning: string
    // Agent type colors
    commandColor: string    // For orchestrator/captain
    scienceColor: string    // For analysis agents
    engineeringColor: string // For coding agents
    // Background
    cardBg?: string
    headerBg?: string
  }

  // Optional flavor
  completionMessage?: string  // Shown when feature completes
  boardTitle?: string         // Optional board header

  // Orchestrator status messages (override defaults)
  orchestratorMessages?: {
    idle?: string
    initializing?: string
    scheduling?: string
    spawning?: string        // "Deploying agents" → "Deploying Starfleet officers"
    monitoring?: string
    complete?: string
  }

  // Agent-specific catchphrases by name (overrides default state text)
  agentCatchphrases?: Record<string, {
    idle?: string
    thinking?: string
    working?: string
    testing?: string
    success?: string
    error?: string
    struggling?: string
  }>
}

// Default theme - the original Autocoder mascots
export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  description: 'The original Autocoder mascots',

  orchestratorName: 'Orchestrator',
  agentNames: [
    'Spark', 'Fizz', 'Octo', 'Hoot', 'Buzz',
    'Pixel', 'Byte', 'Nova', 'Chip', 'Bolt',
    'Dash', 'Zap', 'Gizmo', 'Turbo', 'Blip',
    'Neon', 'Widget', 'Zippy', 'Quirk', 'Flux',
  ],

  columns: {
    pending: 'Pending',
    inProgress: 'In Progress',
    testing: 'Testing',
    complete: 'Complete',
  },

  colors: {
    primary: 'hsl(187 100% 42%)',      // Cyan
    secondary: 'hsl(210 40% 96%)',
    accent: 'hsl(187 100% 42%)',
    success: 'hsl(142 76% 36%)',
    warning: 'hsl(38 92% 50%)',
    commandColor: 'hsl(187 100% 42%)',
    scienceColor: 'hsl(210 100% 50%)',
    engineeringColor: 'hsl(0 84% 60%)',
  },

  completionMessage: 'Feature complete!',
}

// Star Trek: The Original Series theme
export const starfleetTOSTheme: Theme = {
  id: 'starfleet_tos',
  name: 'Starfleet TOS',
  description: 'Star Trek: The Original Series - USS Enterprise crew',

  orchestratorName: 'Captain Kirk',
  agentNames: [
    'Spock',      // Science Officer - logical, analytical
    'McCoy',      // Chief Medical Officer - diagnostics
    'Scotty',     // Chief Engineer - fixes everything
    'Sulu',       // Helmsman - navigation/direction
    'Uhura',      // Communications - interfaces
    'Chekov',     // Navigator - pathfinding
    'Chapel',     // Nurse - support
    'Riley',      // Lieutenant - general duty
    'Kyle',       // Transporter Chief - data transfer
    'Leslie',     // Security - validation
    'DeSalle',    // Assistant Engineer
    'Rand',       // Yeoman - documentation
  ],

  columns: {
    pending: 'Starbase',
    inProgress: 'Away Mission',
    testing: 'Scanning',
    complete: "Captain's Log",
  },

  colors: {
    primary: 'hsl(45 100% 50%)',       // Command Gold
    secondary: 'hsl(220 30% 20%)',     // Space dark blue
    accent: 'hsl(200 100% 50%)',       // Science Blue
    success: 'hsl(142 76% 36%)',       // Green (success)
    warning: 'hsl(0 84% 50%)',         // Red Alert
    commandColor: 'hsl(45 100% 50%)',  // Command Gold
    scienceColor: 'hsl(200 100% 50%)', // Science Blue
    engineeringColor: 'hsl(0 72% 51%)',// Engineering Red
  },

  completionMessage: "Captain's Log: Mission accomplished!",
  boardTitle: 'USS Enterprise Mission Control',

  // Kirk's command messages
  orchestratorMessages: {
    idle: 'Standing by on the bridge...',
    initializing: 'Preparing the away team...',
    scheduling: 'Plotting our course...',
    spawning: 'Deploying Starfleet officers...',
    monitoring: 'Monitoring away team status...',
    complete: 'Mission accomplished, Mr. Spock!',
  },

  // Character catchphrases
  agentCatchphrases: {
    'Spock': {
      idle: 'Awaiting orders, Captain.',
      thinking: 'Fascinating...',
      working: 'Logic dictates this approach.',
      testing: 'Running sensor analysis...',
      success: 'Live long and prosper.',
      error: 'Highly illogical.',
      struggling: 'The odds are... not in our favor.',
    },
    'McCoy': {
      idle: 'Standing by in sickbay.',
      thinking: "I'm a doctor, not a mind reader!",
      working: "Dammit Jim, I'm a doctor, not a coder!",
      testing: 'Running diagnostics...',
      success: "He's alive, Jim!",
      error: "He's dead, Jim.",
      struggling: "I can't change the laws of physics!",
    },
    'Scotty': {
      idle: 'Engineering standing by.',
      thinking: "I'm workin' on it, Captain!",
      working: "I'm givin' her all she's got!",
      testing: 'Running engine diagnostics...',
      success: 'She handled it beautifully, sir!',
      error: "She cannae take much more o' this!",
      struggling: "I need more power, Captain!",
    },
    'Sulu': {
      idle: 'Helm ready, Captain.',
      thinking: 'Calculating trajectory...',
      working: 'Setting course, sir.',
      testing: 'Running navigation checks...',
      success: 'On course, Captain.',
      error: 'We have a navigation problem.',
      struggling: 'Fighting for control!',
    },
    'Uhura': {
      idle: 'Hailing frequencies open.',
      thinking: 'Analyzing signal patterns...',
      working: 'Establishing communication link...',
      testing: 'Running comm diagnostics...',
      success: 'Message transmitted, Captain.',
      error: 'I cannot establish contact.',
      struggling: 'Heavy interference, Captain!',
    },
    'Chekov': {
      idle: 'Ready at navigation, Keptin.',
      thinking: 'Calculating wectors...',
      working: 'This was inwented in Russia!',
      testing: 'Checking coordinates...',
      success: 'Course plotted, Keptin!',
      error: 'Keptin, we have a problem!',
      struggling: 'The instruments are going crazy!',
    },
    'Chapel': {
      idle: 'Nurse Chapel standing by.',
      thinking: 'Analyzing medical data...',
      working: 'Preparing treatment protocol...',
      testing: 'Running medical scans...',
      success: 'Vital signs are stable.',
      error: 'We need Dr. McCoy!',
      struggling: 'The patient needs help!',
    },
    'Captain Kirk': {
      idle: 'Kirk here.',
      thinking: 'Considering our options...',
      working: 'Risk is our business!',
      testing: 'Evaluating the situation...',
      success: "Well done, that's an order.",
      error: 'We need another option.',
      struggling: "I don't believe in no-win scenarios!",
    },
  },
}

// All available themes
export const themes: Record<string, Theme> = {
  default: defaultTheme,
  starfleet_tos: starfleetTOSTheme,
}

// Helper to get theme by ID
export function getTheme(themeId: string): Theme {
  return themes[themeId] || defaultTheme
}

// Get agent name for a given index within a theme
export function getAgentName(theme: Theme, index: number): string {
  return theme.agentNames[index % theme.agentNames.length]
}

// Get column title for a status
export function getColumnTitle(
  theme: Theme,
  status: 'pending' | 'inProgress' | 'testing' | 'complete'
): string {
  return theme.columns[status]
}

// Get orchestrator message for a state
export function getOrchestratorMessage(
  theme: Theme,
  state: 'idle' | 'initializing' | 'scheduling' | 'spawning' | 'monitoring' | 'complete'
): string | undefined {
  return theme.orchestratorMessages?.[state]
}

// Get agent catchphrase for a name and state
export function getAgentCatchphrase(
  theme: Theme,
  agentName: string,
  state: 'idle' | 'thinking' | 'working' | 'testing' | 'success' | 'error' | 'struggling'
): string | undefined {
  return theme.agentCatchphrases?.[agentName]?.[state]
}
