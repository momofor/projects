import { ValidationOptions, ValidatorConstraintInterface } from "class-validator";
export declare class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
    validate(email: string): Promise<boolean>;
}
export declare function IsEmailAlreadyExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=../../../../maps/modules/user/register/isEmailAlreadyExist.d.ts.map