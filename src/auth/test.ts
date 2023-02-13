// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import {Strategy, VerifyCallback }from 'passport-google-oauth20';


// @Injectable()
// export class GoogleStrategy extends PassportStrategy(Strategy) {
//     constructor() {
//         super({
//             clientID: '854785160029-os1k6kg6kqu7fedbmul2esrni3lmbvnv.apps.googleusercontent.com',
//             clientSecret: 'BuzoCOXyBnVzII6kxV7utDVX',
//             callbackURL: 'http://localhost:3000/auth/google/callback',
//             scope: ['email','profile']
//         })  
//     }

//     async validate(accessToken: string, refreshToken: string, profile:any, done: VerifyCallback): Promise<any> {
//         //console.log('google AT', accessToken);
//         done(null, profile);
//     }
// }