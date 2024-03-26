package com.kamikase.web.posbackend.validator;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;


public class NomeClubeValidator implements
        ConstraintValidator<NomeClubelValidation, String> {
    private String message;
    @Override
    public void initialize(NomeClubelValidation constraintAnnotation) {
        message = constraintAnnotation.message();
    }


    @Override
    public boolean isValid(String nome, ConstraintValidatorContext constraintValidatorContext) {
        if(nome.contains("Flamengo") || nome.contains("Palmeiras") || nome.contains("Fluminense") || nome.contains("Botafogo")) {
            constraintValidatorContext.disableDefaultConstraintViolation();
            constraintValidatorContext
                    .buildConstraintViolationWithTemplate(message + nome)//
                    .addConstraintViolation();
            return false;
        }
        return true;
    }

}
