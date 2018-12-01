// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cognito_identity_pool_id = 'us-east-2:814dd8ae-5403-4211-8ac6-c90a93e8618a';
var aws_cognito_region = 'us-east-2';
var aws_mobile_analytics_app_id = 'a54906b42efd42888603666bcb011a1a';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = '29f92f4e-bca6-4180-93d2-69fd609bf26a';
var aws_project_name = 'servo';
var aws_project_region = 'us-east-2';
var aws_resource_name_prefix = 'servo-mobilehub-1870768785';
var aws_sign_in_enabled = 'enable';
var aws_user_pools = 'enable';
var aws_user_pools_id = 'us-east-2_erbYUv3v2';
var aws_user_pools_mfa_type = 'OFF';
var aws_user_pools_web_client_id = '5ki9ciit211dp7fp3ocqevgup7';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});