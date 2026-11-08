import type { Classroom, Student, Teacher } from './types'
export function createStudent(name: string, schoolId: string): Student { return { id: Date.now(), name, schoolId: schoolId || `ST-${Date.now()}`, className: '' } }
export function createTeacher(name: string): Teacher { return { id: Date.now(), name, className: '' } }
export function createClassroom(name: string, grade: string): Classroom { return { id: Date.now(), name, grade: grade || 'مرحلة عامة', studentIds: [], teacherIds: [] } }
export function canDeleteClassroom(classroom: Classroom): boolean { return classroom.studentIds.length === 0 && classroom.teacherIds.length === 0 }
