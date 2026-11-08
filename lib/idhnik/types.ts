export type Role = 'teacher' | 'supervisor' | 'admin'
export type PermissionStatus = 'pending' | 'out' | 'returned' | 'cancelled'
export type Permission = { id: number; student: string; initials: string; className: string; destination: string; status: PermissionStatus; checkout?: string; expected?: string; overdue?: boolean }
export type Student = { id: number; name: string; schoolId: string; className: string }
export type Teacher = { id: number; name: string; className: string }
export type Classroom = { id: number; name: string; grade: string; studentIds: number[]; teacherIds: number[] }
export type NavItem = readonly [string, string, React.ComponentType<{ className?: string }>]
