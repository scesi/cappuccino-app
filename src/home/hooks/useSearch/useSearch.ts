import { useState } from "react"

import { Level, Subject } from "@/models"
import { isTextSimilarToText } from "@/utils"

interface searchTerms {
    teacher: string,
    subjectName: string
}

interface attributes {
    items: Level[],
    keys: (keyof searchTerms)[],
    query: string
}

export const useSearch = ({ items: levels, keys, query }: attributes) => {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    const resetSubjects = () => {
        setSubjects([]);
    }

    const filterSubjectsByTeacherName = (subject: Subject) => {
        return subject.groups.find(g => isTextSimilarToText( g.teacher, query));
    }

    const filterSubjectsBySubjectName = (subject: Subject) => {
        return isTextSimilarToText(subject.name, query);
    }

    const filteredSubjectsByTeacherOrSubjectName = (subject: Subject) => {
        return filterSubjectsByTeacherName(subject) || filterSubjectsBySubjectName(subject);
    }

    const filterSubjectsByKeys = (subject: Subject) => {
        if(keys.includes("subjectName") && keys.includes("teacher")) {
            return filteredSubjectsByTeacherOrSubjectName(subject);
        }
        else if(keys.includes("subjectName")) {
            return filterSubjectsBySubjectName(subject);
        }
        else if(keys.includes("teacher")) {
            return filterSubjectsByTeacherName(subject);
        }  
    }

    const filterSubjects = () => {
        if(query == null || query.length === 0) {
            resetSubjects();
        }
        else {
            let result: Subject[] = [];

            levels.forEach(
                (level) => {
                    const filteredSubjects: Subject[] = level.subjects.filter(filterSubjectsByKeys);
                    if(filteredSubjects.length > 0) {
                        result = result.concat(filteredSubjects)
                    }
                });

            if(result.length > 0) {
                setSubjects(result);
            }
            else {
                resetSubjects();
            }
        }
    }

    return { subjects, filterSubjects };
}