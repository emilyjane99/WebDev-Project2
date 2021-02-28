class User {
    userId: number;
    firstName: String;
    lastName: String;
    emailAddress: String;
    password: String | undefined;

    constructor(userId:number, firstName:String, lastName:String, emailAddress:String,password:String)
    {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    displayAsString():String{

        return`{userID: ${(this.userId)}, firstName: ${(this.firstName)}, lastName: ${(this.lastName)}, emailAddress: ${(this.emailAddress)}}`;

    }
}

export {User};