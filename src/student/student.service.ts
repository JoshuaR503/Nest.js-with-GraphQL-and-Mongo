import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student) private repostory: Repository<Student>
    ) {}

    async getStudents(): Promise<Student[]> {
        return this.repostory.find();
    }

    async getStudent(id: string): Promise<Student> {
        return this.repostory.findOne({ id });
    }

    async getManyStudents(ids: string[]): Promise<Student[]>  {
        return this.repostory.find({
            where: {
                id: {
                    $in: ids
                }
            }
        })
    }

    async createStudent( input: CreateStudentInput): Promise<Student> {
        const {firstName, lastName} = input;
        const student = this.repostory.create({
            id: uuid(),
            firstName,
            lastName
        });

        return await this.repostory.save(student);
    }
}
