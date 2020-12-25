import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateStudentInput } from "./student.input";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(() => StudentType)
export class StudentResolver {

    constructor ( private studentService: StudentService ) {}

    @Query(returns => StudentType)
    async student(@Args('id') id: string) {
        return this.studentService.getStudent(id);
    }

    @Query(returns => [StudentType])
    async students() {
        return this.studentService.getStudents();
    }

    @Mutation(() => StudentType)
    async createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
        return await this.studentService.createStudent(createStudentInput);
    }

} 