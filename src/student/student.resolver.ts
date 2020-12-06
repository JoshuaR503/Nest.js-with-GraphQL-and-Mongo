import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateStudentInput } from "./student.input";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(() => StudentType)
export class StudentResolver {

    constructor ( private studentService: StudentService ) {}

    @Mutation(() => StudentType)
    async createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
        return await this.studentService.createStudent(createStudentInput);
    }

} 