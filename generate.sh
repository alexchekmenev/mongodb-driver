if [ ! -d "vendor" ]; then
  mkdir vendor && cd vendor && curl -O https://www.antlr.org/download/antlr-4.8-complete.jar && cd ..
fi

alias antlr4='java -Xmx500M -cp "$(pwd)/vendor/antlr-4.8-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
alias grun='java -Xmx500M -cp "$(pwd)/vendor/antlr-4.8-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'

rm -rf src/generated

antlr4 -Dlanguage=JavaScript -o 'src/generated' -lib 'src/grammar' \
-visitor -Xexact-output-dir src/grammar/*.g4
