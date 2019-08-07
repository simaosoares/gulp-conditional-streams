# gulp-conditional-streams

Sample application featuring conditional gulp streams based on the environment mode.
With `production` mode active our source files are processed by `uglify` plugin and the extension renamed to `.min.js`. 

# Build application
```
npm install
```

# Run application
Just trigger the default `gulp` task with: 
```
gulp
```
The production mode can be enabled with: 
```
gulp --production
```
The `manual` task uses a more traditional condition way with streams:
```
gulp manual [--production]
```

# References

* https://github.com/gulpjs/gulp
* https://github.com/rvagg/through2
* https://github.com/terinjokes/gulp-uglify

 