# SchoolAPI
CodeAssessment to design a school API to display the data related to schools

Instructions:

1. Start running the nodejs server in local.
2. Trying calling the nodejs file with name searchschool.js with the nodejs port and embed the parameters to get specific search results.
3. Example of the url to access after running the nodejs server: (please change the port number with your nodejs port number)
http://localhost:8080/searchschool.js?search=560062&by=pincode&filterCategory=category&filterBy=Upper;
4. The url part post '?' are the arguments where first two arguments are for 'Search Keyword' and 'Search By' where Search By are the categories of (schoolname,address,area,pincode,landmark)
5. The next set of parameters is the filter to be applied over the data where filterCategory could be one of the following (category,gender,medium_of_inst).
6. The sorting functionality has been implemented over the table headers click for fields(schoolname,pincode,medium_of_inst).


