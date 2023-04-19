const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Shrek 5",
        ano: "2023",
        autor: "Chris Meledantri",
        produtora: "DreamWorks"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido', () => {
    const result = Validation.update({
        nome: "Shrek 5",
        ano: "2023"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido', () => {
    const result = Validation.get({
        produtora: "DreamWorks"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        ano: "2023",
        autor: "Matthew Fogel",
        produtora: "Universal"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.update({
        ano: "2023"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro produtora', () => {
    const result = Validation.get({
        ano: "2023"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});