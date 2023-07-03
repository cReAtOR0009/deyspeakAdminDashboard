module.exports = {
    defaultServerResponse: {
        status:400,
        response:"",
        data:{}
    },
    languageMessage:{
        LANGUAGE_CREATED: 'Language Created Successfully',
        LANGUAGE_FETCHED: 'Language Fetched Successfully',
        LANGUAGE_NOT_FOUND: 'Language not found',
        LANGUAGE_FOUND: 'Language found',
        LANGUAGE_DUPLICATE: "Language already exist",
        LANGUAGE_UPDATED: 'Language updated Successfully',
        LANGUAGE_DELETED: 'Language deleted Successfully',
    },
    moduleMessage: {
        DUPLICATE_NAME: 'Module already exist with given name',
        NOT_FOUND: 'Module does not exist',
        UPDATED: 'Module updated successfully',
        CREATED: 'Module created successfully',
        FETCHED: 'Module fetched successfully',
    },
    lessonMessage: {
        LESSON_DUPLICATE_NAME: 'Lesson already exist with given name',
        LESSON_NOT_FOUND: 'Lesson does not exist',
        LESSON_UPDATED: 'Lesson updated successfully',
        LESSON_CREATED: 'Lesson created successfully',
        LESSON_FETCHED: 'Lesson fetched successfully',
        LESSON_DELETED: 'Lesson deleted successfully',
    },
    adminMessage:{
        ADMIN_LOGIN : "Admin Logged in Successfully",
        ADMIN_UNAUTHORIZED:"You are not Authorized",
        ADMIN_WRONG_PASSWORD:"Invalid Password",
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid request',
        TOKEN_MISSING: 'Token missing from header',
        USER_NOT_AUTHORIZED: 'Unauthorized',
    },
    databaseMessage: {
        INVALID_ID: 'Invalid id',
},
}