// Generated from src/grammar/MySqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MySqlParser.
function MySqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MySqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MySqlParserListener.prototype.constructor = MySqlParserListener;

// Enter a parse tree produced by MySqlParser#root.
MySqlParserListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#root.
MySqlParserListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#sqlStatements.
MySqlParserListener.prototype.enterSqlStatements = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#sqlStatements.
MySqlParserListener.prototype.exitSqlStatements = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#sqlStatement.
MySqlParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#sqlStatement.
MySqlParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#emptyStatement.
MySqlParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#emptyStatement.
MySqlParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ddlStatement.
MySqlParserListener.prototype.enterDdlStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ddlStatement.
MySqlParserListener.prototype.exitDdlStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dmlStatement.
MySqlParserListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dmlStatement.
MySqlParserListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#transactionStatement.
MySqlParserListener.prototype.enterTransactionStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#transactionStatement.
MySqlParserListener.prototype.exitTransactionStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#replicationStatement.
MySqlParserListener.prototype.enterReplicationStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#replicationStatement.
MySqlParserListener.prototype.exitReplicationStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#preparedStatement.
MySqlParserListener.prototype.enterPreparedStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#preparedStatement.
MySqlParserListener.prototype.exitPreparedStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#compoundStatement.
MySqlParserListener.prototype.enterCompoundStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#compoundStatement.
MySqlParserListener.prototype.exitCompoundStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#administrationStatement.
MySqlParserListener.prototype.enterAdministrationStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#administrationStatement.
MySqlParserListener.prototype.exitAdministrationStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#utilityStatement.
MySqlParserListener.prototype.enterUtilityStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#utilityStatement.
MySqlParserListener.prototype.exitUtilityStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createDatabase.
MySqlParserListener.prototype.enterCreateDatabase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createDatabase.
MySqlParserListener.prototype.exitCreateDatabase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createEvent.
MySqlParserListener.prototype.enterCreateEvent = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createEvent.
MySqlParserListener.prototype.exitCreateEvent = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createIndex.
MySqlParserListener.prototype.enterCreateIndex = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createIndex.
MySqlParserListener.prototype.exitCreateIndex = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createLogfileGroup.
MySqlParserListener.prototype.enterCreateLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createLogfileGroup.
MySqlParserListener.prototype.exitCreateLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createProcedure.
MySqlParserListener.prototype.enterCreateProcedure = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createProcedure.
MySqlParserListener.prototype.exitCreateProcedure = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createFunction.
MySqlParserListener.prototype.enterCreateFunction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createFunction.
MySqlParserListener.prototype.exitCreateFunction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createServer.
MySqlParserListener.prototype.enterCreateServer = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createServer.
MySqlParserListener.prototype.exitCreateServer = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#copyCreateTable.
MySqlParserListener.prototype.enterCopyCreateTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#copyCreateTable.
MySqlParserListener.prototype.exitCopyCreateTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#queryCreateTable.
MySqlParserListener.prototype.enterQueryCreateTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#queryCreateTable.
MySqlParserListener.prototype.exitQueryCreateTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#columnCreateTable.
MySqlParserListener.prototype.enterColumnCreateTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#columnCreateTable.
MySqlParserListener.prototype.exitColumnCreateTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createTablespaceInnodb.
MySqlParserListener.prototype.enterCreateTablespaceInnodb = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createTablespaceInnodb.
MySqlParserListener.prototype.exitCreateTablespaceInnodb = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createTablespaceNdb.
MySqlParserListener.prototype.enterCreateTablespaceNdb = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createTablespaceNdb.
MySqlParserListener.prototype.exitCreateTablespaceNdb = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createTrigger.
MySqlParserListener.prototype.enterCreateTrigger = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createTrigger.
MySqlParserListener.prototype.exitCreateTrigger = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createView.
MySqlParserListener.prototype.enterCreateView = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createView.
MySqlParserListener.prototype.exitCreateView = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createDatabaseOption.
MySqlParserListener.prototype.enterCreateDatabaseOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createDatabaseOption.
MySqlParserListener.prototype.exitCreateDatabaseOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ownerStatement.
MySqlParserListener.prototype.enterOwnerStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ownerStatement.
MySqlParserListener.prototype.exitOwnerStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#preciseSchedule.
MySqlParserListener.prototype.enterPreciseSchedule = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#preciseSchedule.
MySqlParserListener.prototype.exitPreciseSchedule = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#intervalSchedule.
MySqlParserListener.prototype.enterIntervalSchedule = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#intervalSchedule.
MySqlParserListener.prototype.exitIntervalSchedule = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#timestampValue.
MySqlParserListener.prototype.enterTimestampValue = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#timestampValue.
MySqlParserListener.prototype.exitTimestampValue = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#intervalExpr.
MySqlParserListener.prototype.enterIntervalExpr = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#intervalExpr.
MySqlParserListener.prototype.exitIntervalExpr = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#intervalType.
MySqlParserListener.prototype.enterIntervalType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#intervalType.
MySqlParserListener.prototype.exitIntervalType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#enableType.
MySqlParserListener.prototype.enterEnableType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#enableType.
MySqlParserListener.prototype.exitEnableType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexType.
MySqlParserListener.prototype.enterIndexType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexType.
MySqlParserListener.prototype.exitIndexType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexOption.
MySqlParserListener.prototype.enterIndexOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexOption.
MySqlParserListener.prototype.exitIndexOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#procedureParameter.
MySqlParserListener.prototype.enterProcedureParameter = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#procedureParameter.
MySqlParserListener.prototype.exitProcedureParameter = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#functionParameter.
MySqlParserListener.prototype.enterFunctionParameter = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#functionParameter.
MySqlParserListener.prototype.exitFunctionParameter = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#routineComment.
MySqlParserListener.prototype.enterRoutineComment = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#routineComment.
MySqlParserListener.prototype.exitRoutineComment = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#routineLanguage.
MySqlParserListener.prototype.enterRoutineLanguage = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#routineLanguage.
MySqlParserListener.prototype.exitRoutineLanguage = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#routineBehavior.
MySqlParserListener.prototype.enterRoutineBehavior = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#routineBehavior.
MySqlParserListener.prototype.exitRoutineBehavior = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#routineData.
MySqlParserListener.prototype.enterRoutineData = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#routineData.
MySqlParserListener.prototype.exitRoutineData = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#routineSecurity.
MySqlParserListener.prototype.enterRoutineSecurity = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#routineSecurity.
MySqlParserListener.prototype.exitRoutineSecurity = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#serverOption.
MySqlParserListener.prototype.enterServerOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#serverOption.
MySqlParserListener.prototype.exitServerOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createDefinitions.
MySqlParserListener.prototype.enterCreateDefinitions = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createDefinitions.
MySqlParserListener.prototype.exitCreateDefinitions = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#columnDeclaration.
MySqlParserListener.prototype.enterColumnDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#columnDeclaration.
MySqlParserListener.prototype.exitColumnDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#constraintDeclaration.
MySqlParserListener.prototype.enterConstraintDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#constraintDeclaration.
MySqlParserListener.prototype.exitConstraintDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexDeclaration.
MySqlParserListener.prototype.enterIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexDeclaration.
MySqlParserListener.prototype.exitIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#columnDefinition.
MySqlParserListener.prototype.enterColumnDefinition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#columnDefinition.
MySqlParserListener.prototype.exitColumnDefinition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#nullColumnConstraint.
MySqlParserListener.prototype.enterNullColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#nullColumnConstraint.
MySqlParserListener.prototype.exitNullColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#defaultColumnConstraint.
MySqlParserListener.prototype.enterDefaultColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#defaultColumnConstraint.
MySqlParserListener.prototype.exitDefaultColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#autoIncrementColumnConstraint.
MySqlParserListener.prototype.enterAutoIncrementColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#autoIncrementColumnConstraint.
MySqlParserListener.prototype.exitAutoIncrementColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#primaryKeyColumnConstraint.
MySqlParserListener.prototype.enterPrimaryKeyColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#primaryKeyColumnConstraint.
MySqlParserListener.prototype.exitPrimaryKeyColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#uniqueKeyColumnConstraint.
MySqlParserListener.prototype.enterUniqueKeyColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#uniqueKeyColumnConstraint.
MySqlParserListener.prototype.exitUniqueKeyColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#commentColumnConstraint.
MySqlParserListener.prototype.enterCommentColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#commentColumnConstraint.
MySqlParserListener.prototype.exitCommentColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#formatColumnConstraint.
MySqlParserListener.prototype.enterFormatColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#formatColumnConstraint.
MySqlParserListener.prototype.exitFormatColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#storageColumnConstraint.
MySqlParserListener.prototype.enterStorageColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#storageColumnConstraint.
MySqlParserListener.prototype.exitStorageColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#referenceColumnConstraint.
MySqlParserListener.prototype.enterReferenceColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#referenceColumnConstraint.
MySqlParserListener.prototype.exitReferenceColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#collateColumnConstraint.
MySqlParserListener.prototype.enterCollateColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#collateColumnConstraint.
MySqlParserListener.prototype.exitCollateColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#generatedColumnConstraint.
MySqlParserListener.prototype.enterGeneratedColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#generatedColumnConstraint.
MySqlParserListener.prototype.exitGeneratedColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#serialDefaultColumnConstraint.
MySqlParserListener.prototype.enterSerialDefaultColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#serialDefaultColumnConstraint.
MySqlParserListener.prototype.exitSerialDefaultColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#checkColumnConstraint.
MySqlParserListener.prototype.enterCheckColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#checkColumnConstraint.
MySqlParserListener.prototype.exitCheckColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#primaryKeyTableConstraint.
MySqlParserListener.prototype.enterPrimaryKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#primaryKeyTableConstraint.
MySqlParserListener.prototype.exitPrimaryKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#uniqueKeyTableConstraint.
MySqlParserListener.prototype.enterUniqueKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#uniqueKeyTableConstraint.
MySqlParserListener.prototype.exitUniqueKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#foreignKeyTableConstraint.
MySqlParserListener.prototype.enterForeignKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#foreignKeyTableConstraint.
MySqlParserListener.prototype.exitForeignKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#checkTableConstraint.
MySqlParserListener.prototype.enterCheckTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#checkTableConstraint.
MySqlParserListener.prototype.exitCheckTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#referenceDefinition.
MySqlParserListener.prototype.enterReferenceDefinition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#referenceDefinition.
MySqlParserListener.prototype.exitReferenceDefinition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#referenceAction.
MySqlParserListener.prototype.enterReferenceAction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#referenceAction.
MySqlParserListener.prototype.exitReferenceAction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#referenceControlType.
MySqlParserListener.prototype.enterReferenceControlType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#referenceControlType.
MySqlParserListener.prototype.exitReferenceControlType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleIndexDeclaration.
MySqlParserListener.prototype.enterSimpleIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleIndexDeclaration.
MySqlParserListener.prototype.exitSimpleIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#specialIndexDeclaration.
MySqlParserListener.prototype.enterSpecialIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#specialIndexDeclaration.
MySqlParserListener.prototype.exitSpecialIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionEngine.
MySqlParserListener.prototype.enterTableOptionEngine = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionEngine.
MySqlParserListener.prototype.exitTableOptionEngine = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionAutoIncrement.
MySqlParserListener.prototype.enterTableOptionAutoIncrement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionAutoIncrement.
MySqlParserListener.prototype.exitTableOptionAutoIncrement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionAverage.
MySqlParserListener.prototype.enterTableOptionAverage = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionAverage.
MySqlParserListener.prototype.exitTableOptionAverage = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionCharset.
MySqlParserListener.prototype.enterTableOptionCharset = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionCharset.
MySqlParserListener.prototype.exitTableOptionCharset = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionChecksum.
MySqlParserListener.prototype.enterTableOptionChecksum = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionChecksum.
MySqlParserListener.prototype.exitTableOptionChecksum = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionCollate.
MySqlParserListener.prototype.enterTableOptionCollate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionCollate.
MySqlParserListener.prototype.exitTableOptionCollate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionComment.
MySqlParserListener.prototype.enterTableOptionComment = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionComment.
MySqlParserListener.prototype.exitTableOptionComment = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionCompression.
MySqlParserListener.prototype.enterTableOptionCompression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionCompression.
MySqlParserListener.prototype.exitTableOptionCompression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionConnection.
MySqlParserListener.prototype.enterTableOptionConnection = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionConnection.
MySqlParserListener.prototype.exitTableOptionConnection = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionDataDirectory.
MySqlParserListener.prototype.enterTableOptionDataDirectory = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionDataDirectory.
MySqlParserListener.prototype.exitTableOptionDataDirectory = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionDelay.
MySqlParserListener.prototype.enterTableOptionDelay = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionDelay.
MySqlParserListener.prototype.exitTableOptionDelay = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionEncryption.
MySqlParserListener.prototype.enterTableOptionEncryption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionEncryption.
MySqlParserListener.prototype.exitTableOptionEncryption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionIndexDirectory.
MySqlParserListener.prototype.enterTableOptionIndexDirectory = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionIndexDirectory.
MySqlParserListener.prototype.exitTableOptionIndexDirectory = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionInsertMethod.
MySqlParserListener.prototype.enterTableOptionInsertMethod = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionInsertMethod.
MySqlParserListener.prototype.exitTableOptionInsertMethod = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionKeyBlockSize.
MySqlParserListener.prototype.enterTableOptionKeyBlockSize = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionKeyBlockSize.
MySqlParserListener.prototype.exitTableOptionKeyBlockSize = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionMaxRows.
MySqlParserListener.prototype.enterTableOptionMaxRows = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionMaxRows.
MySqlParserListener.prototype.exitTableOptionMaxRows = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionMinRows.
MySqlParserListener.prototype.enterTableOptionMinRows = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionMinRows.
MySqlParserListener.prototype.exitTableOptionMinRows = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionPackKeys.
MySqlParserListener.prototype.enterTableOptionPackKeys = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionPackKeys.
MySqlParserListener.prototype.exitTableOptionPackKeys = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionPassword.
MySqlParserListener.prototype.enterTableOptionPassword = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionPassword.
MySqlParserListener.prototype.exitTableOptionPassword = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionRowFormat.
MySqlParserListener.prototype.enterTableOptionRowFormat = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionRowFormat.
MySqlParserListener.prototype.exitTableOptionRowFormat = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionRecalculation.
MySqlParserListener.prototype.enterTableOptionRecalculation = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionRecalculation.
MySqlParserListener.prototype.exitTableOptionRecalculation = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionPersistent.
MySqlParserListener.prototype.enterTableOptionPersistent = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionPersistent.
MySqlParserListener.prototype.exitTableOptionPersistent = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionSamplePage.
MySqlParserListener.prototype.enterTableOptionSamplePage = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionSamplePage.
MySqlParserListener.prototype.exitTableOptionSamplePage = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionTablespace.
MySqlParserListener.prototype.enterTableOptionTablespace = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionTablespace.
MySqlParserListener.prototype.exitTableOptionTablespace = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableOptionUnion.
MySqlParserListener.prototype.enterTableOptionUnion = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableOptionUnion.
MySqlParserListener.prototype.exitTableOptionUnion = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tablespaceStorage.
MySqlParserListener.prototype.enterTablespaceStorage = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tablespaceStorage.
MySqlParserListener.prototype.exitTablespaceStorage = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionDefinitions.
MySqlParserListener.prototype.enterPartitionDefinitions = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionDefinitions.
MySqlParserListener.prototype.exitPartitionDefinitions = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionFunctionHash.
MySqlParserListener.prototype.enterPartitionFunctionHash = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionFunctionHash.
MySqlParserListener.prototype.exitPartitionFunctionHash = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionFunctionKey.
MySqlParserListener.prototype.enterPartitionFunctionKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionFunctionKey.
MySqlParserListener.prototype.exitPartitionFunctionKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionFunctionRange.
MySqlParserListener.prototype.enterPartitionFunctionRange = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionFunctionRange.
MySqlParserListener.prototype.exitPartitionFunctionRange = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionFunctionList.
MySqlParserListener.prototype.enterPartitionFunctionList = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionFunctionList.
MySqlParserListener.prototype.exitPartitionFunctionList = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#subPartitionFunctionHash.
MySqlParserListener.prototype.enterSubPartitionFunctionHash = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#subPartitionFunctionHash.
MySqlParserListener.prototype.exitSubPartitionFunctionHash = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#subPartitionFunctionKey.
MySqlParserListener.prototype.enterSubPartitionFunctionKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#subPartitionFunctionKey.
MySqlParserListener.prototype.exitSubPartitionFunctionKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionComparision.
MySqlParserListener.prototype.enterPartitionComparision = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionComparision.
MySqlParserListener.prototype.exitPartitionComparision = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionListAtom.
MySqlParserListener.prototype.enterPartitionListAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionListAtom.
MySqlParserListener.prototype.exitPartitionListAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionListVector.
MySqlParserListener.prototype.enterPartitionListVector = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionListVector.
MySqlParserListener.prototype.exitPartitionListVector = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionSimple.
MySqlParserListener.prototype.enterPartitionSimple = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionSimple.
MySqlParserListener.prototype.exitPartitionSimple = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionDefinerAtom.
MySqlParserListener.prototype.enterPartitionDefinerAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionDefinerAtom.
MySqlParserListener.prototype.exitPartitionDefinerAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionDefinerVector.
MySqlParserListener.prototype.enterPartitionDefinerVector = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionDefinerVector.
MySqlParserListener.prototype.exitPartitionDefinerVector = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#subpartitionDefinition.
MySqlParserListener.prototype.enterSubpartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#subpartitionDefinition.
MySqlParserListener.prototype.exitSubpartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionEngine.
MySqlParserListener.prototype.enterPartitionOptionEngine = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionEngine.
MySqlParserListener.prototype.exitPartitionOptionEngine = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionComment.
MySqlParserListener.prototype.enterPartitionOptionComment = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionComment.
MySqlParserListener.prototype.exitPartitionOptionComment = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionDataDirectory.
MySqlParserListener.prototype.enterPartitionOptionDataDirectory = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionDataDirectory.
MySqlParserListener.prototype.exitPartitionOptionDataDirectory = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionIndexDirectory.
MySqlParserListener.prototype.enterPartitionOptionIndexDirectory = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionIndexDirectory.
MySqlParserListener.prototype.exitPartitionOptionIndexDirectory = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionMaxRows.
MySqlParserListener.prototype.enterPartitionOptionMaxRows = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionMaxRows.
MySqlParserListener.prototype.exitPartitionOptionMaxRows = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionMinRows.
MySqlParserListener.prototype.enterPartitionOptionMinRows = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionMinRows.
MySqlParserListener.prototype.exitPartitionOptionMinRows = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionTablespace.
MySqlParserListener.prototype.enterPartitionOptionTablespace = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionTablespace.
MySqlParserListener.prototype.exitPartitionOptionTablespace = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#partitionOptionNodeGroup.
MySqlParserListener.prototype.enterPartitionOptionNodeGroup = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#partitionOptionNodeGroup.
MySqlParserListener.prototype.exitPartitionOptionNodeGroup = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterSimpleDatabase.
MySqlParserListener.prototype.enterAlterSimpleDatabase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterSimpleDatabase.
MySqlParserListener.prototype.exitAlterSimpleDatabase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterUpgradeName.
MySqlParserListener.prototype.enterAlterUpgradeName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterUpgradeName.
MySqlParserListener.prototype.exitAlterUpgradeName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterEvent.
MySqlParserListener.prototype.enterAlterEvent = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterEvent.
MySqlParserListener.prototype.exitAlterEvent = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterFunction.
MySqlParserListener.prototype.enterAlterFunction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterFunction.
MySqlParserListener.prototype.exitAlterFunction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterInstance.
MySqlParserListener.prototype.enterAlterInstance = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterInstance.
MySqlParserListener.prototype.exitAlterInstance = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterLogfileGroup.
MySqlParserListener.prototype.enterAlterLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterLogfileGroup.
MySqlParserListener.prototype.exitAlterLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterProcedure.
MySqlParserListener.prototype.enterAlterProcedure = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterProcedure.
MySqlParserListener.prototype.exitAlterProcedure = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterServer.
MySqlParserListener.prototype.enterAlterServer = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterServer.
MySqlParserListener.prototype.exitAlterServer = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterTable.
MySqlParserListener.prototype.enterAlterTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterTable.
MySqlParserListener.prototype.exitAlterTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterTablespace.
MySqlParserListener.prototype.enterAlterTablespace = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterTablespace.
MySqlParserListener.prototype.exitAlterTablespace = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterView.
MySqlParserListener.prototype.enterAlterView = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterView.
MySqlParserListener.prototype.exitAlterView = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByTableOption.
MySqlParserListener.prototype.enterAlterByTableOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByTableOption.
MySqlParserListener.prototype.exitAlterByTableOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddColumn.
MySqlParserListener.prototype.enterAlterByAddColumn = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddColumn.
MySqlParserListener.prototype.exitAlterByAddColumn = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddColumns.
MySqlParserListener.prototype.enterAlterByAddColumns = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddColumns.
MySqlParserListener.prototype.exitAlterByAddColumns = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddIndex.
MySqlParserListener.prototype.enterAlterByAddIndex = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddIndex.
MySqlParserListener.prototype.exitAlterByAddIndex = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddPrimaryKey.
MySqlParserListener.prototype.enterAlterByAddPrimaryKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddPrimaryKey.
MySqlParserListener.prototype.exitAlterByAddPrimaryKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddUniqueKey.
MySqlParserListener.prototype.enterAlterByAddUniqueKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddUniqueKey.
MySqlParserListener.prototype.exitAlterByAddUniqueKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddSpecialIndex.
MySqlParserListener.prototype.enterAlterByAddSpecialIndex = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddSpecialIndex.
MySqlParserListener.prototype.exitAlterByAddSpecialIndex = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddForeignKey.
MySqlParserListener.prototype.enterAlterByAddForeignKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddForeignKey.
MySqlParserListener.prototype.exitAlterByAddForeignKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddCheckTableConstraint.
MySqlParserListener.prototype.enterAlterByAddCheckTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddCheckTableConstraint.
MySqlParserListener.prototype.exitAlterByAddCheckTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterBySetAlgorithm.
MySqlParserListener.prototype.enterAlterBySetAlgorithm = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterBySetAlgorithm.
MySqlParserListener.prototype.exitAlterBySetAlgorithm = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByChangeDefault.
MySqlParserListener.prototype.enterAlterByChangeDefault = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByChangeDefault.
MySqlParserListener.prototype.exitAlterByChangeDefault = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByChangeColumn.
MySqlParserListener.prototype.enterAlterByChangeColumn = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByChangeColumn.
MySqlParserListener.prototype.exitAlterByChangeColumn = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByRenameColumn.
MySqlParserListener.prototype.enterAlterByRenameColumn = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByRenameColumn.
MySqlParserListener.prototype.exitAlterByRenameColumn = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByLock.
MySqlParserListener.prototype.enterAlterByLock = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByLock.
MySqlParserListener.prototype.exitAlterByLock = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByModifyColumn.
MySqlParserListener.prototype.enterAlterByModifyColumn = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByModifyColumn.
MySqlParserListener.prototype.exitAlterByModifyColumn = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDropColumn.
MySqlParserListener.prototype.enterAlterByDropColumn = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDropColumn.
MySqlParserListener.prototype.exitAlterByDropColumn = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDropPrimaryKey.
MySqlParserListener.prototype.enterAlterByDropPrimaryKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDropPrimaryKey.
MySqlParserListener.prototype.exitAlterByDropPrimaryKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByRenameIndex.
MySqlParserListener.prototype.enterAlterByRenameIndex = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByRenameIndex.
MySqlParserListener.prototype.exitAlterByRenameIndex = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAlterIndexVisibility.
MySqlParserListener.prototype.enterAlterByAlterIndexVisibility = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAlterIndexVisibility.
MySqlParserListener.prototype.exitAlterByAlterIndexVisibility = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDropIndex.
MySqlParserListener.prototype.enterAlterByDropIndex = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDropIndex.
MySqlParserListener.prototype.exitAlterByDropIndex = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDropForeignKey.
MySqlParserListener.prototype.enterAlterByDropForeignKey = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDropForeignKey.
MySqlParserListener.prototype.exitAlterByDropForeignKey = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDisableKeys.
MySqlParserListener.prototype.enterAlterByDisableKeys = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDisableKeys.
MySqlParserListener.prototype.exitAlterByDisableKeys = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByEnableKeys.
MySqlParserListener.prototype.enterAlterByEnableKeys = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByEnableKeys.
MySqlParserListener.prototype.exitAlterByEnableKeys = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByRename.
MySqlParserListener.prototype.enterAlterByRename = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByRename.
MySqlParserListener.prototype.exitAlterByRename = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByOrder.
MySqlParserListener.prototype.enterAlterByOrder = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByOrder.
MySqlParserListener.prototype.exitAlterByOrder = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByConvertCharset.
MySqlParserListener.prototype.enterAlterByConvertCharset = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByConvertCharset.
MySqlParserListener.prototype.exitAlterByConvertCharset = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDefaultCharset.
MySqlParserListener.prototype.enterAlterByDefaultCharset = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDefaultCharset.
MySqlParserListener.prototype.exitAlterByDefaultCharset = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDiscardTablespace.
MySqlParserListener.prototype.enterAlterByDiscardTablespace = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDiscardTablespace.
MySqlParserListener.prototype.exitAlterByDiscardTablespace = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByImportTablespace.
MySqlParserListener.prototype.enterAlterByImportTablespace = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByImportTablespace.
MySqlParserListener.prototype.exitAlterByImportTablespace = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByForce.
MySqlParserListener.prototype.enterAlterByForce = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByForce.
MySqlParserListener.prototype.exitAlterByForce = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByValidate.
MySqlParserListener.prototype.enterAlterByValidate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByValidate.
MySqlParserListener.prototype.exitAlterByValidate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAddPartition.
MySqlParserListener.prototype.enterAlterByAddPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAddPartition.
MySqlParserListener.prototype.exitAlterByAddPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDropPartition.
MySqlParserListener.prototype.enterAlterByDropPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDropPartition.
MySqlParserListener.prototype.exitAlterByDropPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByDiscardPartition.
MySqlParserListener.prototype.enterAlterByDiscardPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByDiscardPartition.
MySqlParserListener.prototype.exitAlterByDiscardPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByImportPartition.
MySqlParserListener.prototype.enterAlterByImportPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByImportPartition.
MySqlParserListener.prototype.exitAlterByImportPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByTruncatePartition.
MySqlParserListener.prototype.enterAlterByTruncatePartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByTruncatePartition.
MySqlParserListener.prototype.exitAlterByTruncatePartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByCoalescePartition.
MySqlParserListener.prototype.enterAlterByCoalescePartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByCoalescePartition.
MySqlParserListener.prototype.exitAlterByCoalescePartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByReorganizePartition.
MySqlParserListener.prototype.enterAlterByReorganizePartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByReorganizePartition.
MySqlParserListener.prototype.exitAlterByReorganizePartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByExchangePartition.
MySqlParserListener.prototype.enterAlterByExchangePartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByExchangePartition.
MySqlParserListener.prototype.exitAlterByExchangePartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByAnalyzePartition.
MySqlParserListener.prototype.enterAlterByAnalyzePartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByAnalyzePartition.
MySqlParserListener.prototype.exitAlterByAnalyzePartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByCheckPartition.
MySqlParserListener.prototype.enterAlterByCheckPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByCheckPartition.
MySqlParserListener.prototype.exitAlterByCheckPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByOptimizePartition.
MySqlParserListener.prototype.enterAlterByOptimizePartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByOptimizePartition.
MySqlParserListener.prototype.exitAlterByOptimizePartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByRebuildPartition.
MySqlParserListener.prototype.enterAlterByRebuildPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByRebuildPartition.
MySqlParserListener.prototype.exitAlterByRebuildPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByRepairPartition.
MySqlParserListener.prototype.enterAlterByRepairPartition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByRepairPartition.
MySqlParserListener.prototype.exitAlterByRepairPartition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByRemovePartitioning.
MySqlParserListener.prototype.enterAlterByRemovePartitioning = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByRemovePartitioning.
MySqlParserListener.prototype.exitAlterByRemovePartitioning = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterByUpgradePartitioning.
MySqlParserListener.prototype.enterAlterByUpgradePartitioning = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterByUpgradePartitioning.
MySqlParserListener.prototype.exitAlterByUpgradePartitioning = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropDatabase.
MySqlParserListener.prototype.enterDropDatabase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropDatabase.
MySqlParserListener.prototype.exitDropDatabase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropEvent.
MySqlParserListener.prototype.enterDropEvent = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropEvent.
MySqlParserListener.prototype.exitDropEvent = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropIndex.
MySqlParserListener.prototype.enterDropIndex = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropIndex.
MySqlParserListener.prototype.exitDropIndex = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropLogfileGroup.
MySqlParserListener.prototype.enterDropLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropLogfileGroup.
MySqlParserListener.prototype.exitDropLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropProcedure.
MySqlParserListener.prototype.enterDropProcedure = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropProcedure.
MySqlParserListener.prototype.exitDropProcedure = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropFunction.
MySqlParserListener.prototype.enterDropFunction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropFunction.
MySqlParserListener.prototype.exitDropFunction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropServer.
MySqlParserListener.prototype.enterDropServer = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropServer.
MySqlParserListener.prototype.exitDropServer = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropTable.
MySqlParserListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropTable.
MySqlParserListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropTablespace.
MySqlParserListener.prototype.enterDropTablespace = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropTablespace.
MySqlParserListener.prototype.exitDropTablespace = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropTrigger.
MySqlParserListener.prototype.enterDropTrigger = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropTrigger.
MySqlParserListener.prototype.exitDropTrigger = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropView.
MySqlParserListener.prototype.enterDropView = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropView.
MySqlParserListener.prototype.exitDropView = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#renameTable.
MySqlParserListener.prototype.enterRenameTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#renameTable.
MySqlParserListener.prototype.exitRenameTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#renameTableClause.
MySqlParserListener.prototype.enterRenameTableClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#renameTableClause.
MySqlParserListener.prototype.exitRenameTableClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#truncateTable.
MySqlParserListener.prototype.enterTruncateTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#truncateTable.
MySqlParserListener.prototype.exitTruncateTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#callStatement.
MySqlParserListener.prototype.enterCallStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#callStatement.
MySqlParserListener.prototype.exitCallStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#deleteStatement.
MySqlParserListener.prototype.enterDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#deleteStatement.
MySqlParserListener.prototype.exitDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#doStatement.
MySqlParserListener.prototype.enterDoStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#doStatement.
MySqlParserListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerStatement.
MySqlParserListener.prototype.enterHandlerStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerStatement.
MySqlParserListener.prototype.exitHandlerStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#insertStatement.
MySqlParserListener.prototype.enterInsertStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#insertStatement.
MySqlParserListener.prototype.exitInsertStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#loadDataStatement.
MySqlParserListener.prototype.enterLoadDataStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#loadDataStatement.
MySqlParserListener.prototype.exitLoadDataStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#loadXmlStatement.
MySqlParserListener.prototype.enterLoadXmlStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#loadXmlStatement.
MySqlParserListener.prototype.exitLoadXmlStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#replaceStatement.
MySqlParserListener.prototype.enterReplaceStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#replaceStatement.
MySqlParserListener.prototype.exitReplaceStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleSelect.
MySqlParserListener.prototype.enterSimpleSelect = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleSelect.
MySqlParserListener.prototype.exitSimpleSelect = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#parenthesisSelect.
MySqlParserListener.prototype.enterParenthesisSelect = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#parenthesisSelect.
MySqlParserListener.prototype.exitParenthesisSelect = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unionSelect.
MySqlParserListener.prototype.enterUnionSelect = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unionSelect.
MySqlParserListener.prototype.exitUnionSelect = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unionParenthesisSelect.
MySqlParserListener.prototype.enterUnionParenthesisSelect = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unionParenthesisSelect.
MySqlParserListener.prototype.exitUnionParenthesisSelect = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#updateStatement.
MySqlParserListener.prototype.enterUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#updateStatement.
MySqlParserListener.prototype.exitUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#insertStatementValue.
MySqlParserListener.prototype.enterInsertStatementValue = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#insertStatementValue.
MySqlParserListener.prototype.exitInsertStatementValue = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#updatedElement.
MySqlParserListener.prototype.enterUpdatedElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#updatedElement.
MySqlParserListener.prototype.exitUpdatedElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#assignmentField.
MySqlParserListener.prototype.enterAssignmentField = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#assignmentField.
MySqlParserListener.prototype.exitAssignmentField = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lockClause.
MySqlParserListener.prototype.enterLockClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lockClause.
MySqlParserListener.prototype.exitLockClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#singleDeleteStatement.
MySqlParserListener.prototype.enterSingleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#singleDeleteStatement.
MySqlParserListener.prototype.exitSingleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#multipleDeleteStatement.
MySqlParserListener.prototype.enterMultipleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#multipleDeleteStatement.
MySqlParserListener.prototype.exitMultipleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerOpenStatement.
MySqlParserListener.prototype.enterHandlerOpenStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerOpenStatement.
MySqlParserListener.prototype.exitHandlerOpenStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerReadIndexStatement.
MySqlParserListener.prototype.enterHandlerReadIndexStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerReadIndexStatement.
MySqlParserListener.prototype.exitHandlerReadIndexStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerReadStatement.
MySqlParserListener.prototype.enterHandlerReadStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerReadStatement.
MySqlParserListener.prototype.exitHandlerReadStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerCloseStatement.
MySqlParserListener.prototype.enterHandlerCloseStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerCloseStatement.
MySqlParserListener.prototype.exitHandlerCloseStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#singleUpdateStatement.
MySqlParserListener.prototype.enterSingleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#singleUpdateStatement.
MySqlParserListener.prototype.exitSingleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#multipleUpdateStatement.
MySqlParserListener.prototype.enterMultipleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#multipleUpdateStatement.
MySqlParserListener.prototype.exitMultipleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#orderByClause.
MySqlParserListener.prototype.enterOrderByClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#orderByClause.
MySqlParserListener.prototype.exitOrderByClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#orderByExpression.
MySqlParserListener.prototype.enterOrderByExpression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#orderByExpression.
MySqlParserListener.prototype.exitOrderByExpression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableSources.
MySqlParserListener.prototype.enterTableSources = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableSources.
MySqlParserListener.prototype.exitTableSources = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableSourceBase.
MySqlParserListener.prototype.enterTableSourceBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableSourceBase.
MySqlParserListener.prototype.exitTableSourceBase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableSourceNested.
MySqlParserListener.prototype.enterTableSourceNested = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableSourceNested.
MySqlParserListener.prototype.exitTableSourceNested = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#atomTableItem.
MySqlParserListener.prototype.enterAtomTableItem = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#atomTableItem.
MySqlParserListener.prototype.exitAtomTableItem = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#subqueryTableItem.
MySqlParserListener.prototype.enterSubqueryTableItem = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#subqueryTableItem.
MySqlParserListener.prototype.exitSubqueryTableItem = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableSourcesItem.
MySqlParserListener.prototype.enterTableSourcesItem = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableSourcesItem.
MySqlParserListener.prototype.exitTableSourcesItem = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexHint.
MySqlParserListener.prototype.enterIndexHint = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexHint.
MySqlParserListener.prototype.exitIndexHint = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexHintType.
MySqlParserListener.prototype.enterIndexHintType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexHintType.
MySqlParserListener.prototype.exitIndexHintType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#innerJoin.
MySqlParserListener.prototype.enterInnerJoin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#innerJoin.
MySqlParserListener.prototype.exitInnerJoin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#straightJoin.
MySqlParserListener.prototype.enterStraightJoin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#straightJoin.
MySqlParserListener.prototype.exitStraightJoin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#outerJoin.
MySqlParserListener.prototype.enterOuterJoin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#outerJoin.
MySqlParserListener.prototype.exitOuterJoin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#naturalJoin.
MySqlParserListener.prototype.enterNaturalJoin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#naturalJoin.
MySqlParserListener.prototype.exitNaturalJoin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#queryExpression.
MySqlParserListener.prototype.enterQueryExpression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#queryExpression.
MySqlParserListener.prototype.exitQueryExpression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#queryExpressionNointo.
MySqlParserListener.prototype.enterQueryExpressionNointo = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#queryExpressionNointo.
MySqlParserListener.prototype.exitQueryExpressionNointo = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#querySpecification.
MySqlParserListener.prototype.enterQuerySpecification = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#querySpecification.
MySqlParserListener.prototype.exitQuerySpecification = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#querySpecificationNointo.
MySqlParserListener.prototype.enterQuerySpecificationNointo = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#querySpecificationNointo.
MySqlParserListener.prototype.exitQuerySpecificationNointo = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unionParenthesis.
MySqlParserListener.prototype.enterUnionParenthesis = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unionParenthesis.
MySqlParserListener.prototype.exitUnionParenthesis = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unionStatement.
MySqlParserListener.prototype.enterUnionStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unionStatement.
MySqlParserListener.prototype.exitUnionStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectSpec.
MySqlParserListener.prototype.enterSelectSpec = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectSpec.
MySqlParserListener.prototype.exitSelectSpec = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectElements.
MySqlParserListener.prototype.enterSelectElements = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectElements.
MySqlParserListener.prototype.exitSelectElements = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectStarElement.
MySqlParserListener.prototype.enterSelectStarElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectStarElement.
MySqlParserListener.prototype.exitSelectStarElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectColumnElement.
MySqlParserListener.prototype.enterSelectColumnElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectColumnElement.
MySqlParserListener.prototype.exitSelectColumnElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectFunctionElement.
MySqlParserListener.prototype.enterSelectFunctionElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectFunctionElement.
MySqlParserListener.prototype.exitSelectFunctionElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectExpressionElement.
MySqlParserListener.prototype.enterSelectExpressionElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectExpressionElement.
MySqlParserListener.prototype.exitSelectExpressionElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectIntoVariables.
MySqlParserListener.prototype.enterSelectIntoVariables = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectIntoVariables.
MySqlParserListener.prototype.exitSelectIntoVariables = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectIntoDumpFile.
MySqlParserListener.prototype.enterSelectIntoDumpFile = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectIntoDumpFile.
MySqlParserListener.prototype.exitSelectIntoDumpFile = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectIntoTextFile.
MySqlParserListener.prototype.enterSelectIntoTextFile = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectIntoTextFile.
MySqlParserListener.prototype.exitSelectIntoTextFile = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectFieldsInto.
MySqlParserListener.prototype.enterSelectFieldsInto = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectFieldsInto.
MySqlParserListener.prototype.exitSelectFieldsInto = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#selectLinesInto.
MySqlParserListener.prototype.enterSelectLinesInto = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#selectLinesInto.
MySqlParserListener.prototype.exitSelectLinesInto = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#fromClause.
MySqlParserListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#fromClause.
MySqlParserListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#groupByItem.
MySqlParserListener.prototype.enterGroupByItem = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#groupByItem.
MySqlParserListener.prototype.exitGroupByItem = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#limitClause.
MySqlParserListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#limitClause.
MySqlParserListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#limitClauseAtom.
MySqlParserListener.prototype.enterLimitClauseAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#limitClauseAtom.
MySqlParserListener.prototype.exitLimitClauseAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#startTransaction.
MySqlParserListener.prototype.enterStartTransaction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#startTransaction.
MySqlParserListener.prototype.exitStartTransaction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#beginWork.
MySqlParserListener.prototype.enterBeginWork = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#beginWork.
MySqlParserListener.prototype.exitBeginWork = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#commitWork.
MySqlParserListener.prototype.enterCommitWork = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#commitWork.
MySqlParserListener.prototype.exitCommitWork = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#rollbackWork.
MySqlParserListener.prototype.enterRollbackWork = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#rollbackWork.
MySqlParserListener.prototype.exitRollbackWork = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#savepointStatement.
MySqlParserListener.prototype.enterSavepointStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#savepointStatement.
MySqlParserListener.prototype.exitSavepointStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#rollbackStatement.
MySqlParserListener.prototype.enterRollbackStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#rollbackStatement.
MySqlParserListener.prototype.exitRollbackStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#releaseStatement.
MySqlParserListener.prototype.enterReleaseStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#releaseStatement.
MySqlParserListener.prototype.exitReleaseStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lockTables.
MySqlParserListener.prototype.enterLockTables = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lockTables.
MySqlParserListener.prototype.exitLockTables = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unlockTables.
MySqlParserListener.prototype.enterUnlockTables = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unlockTables.
MySqlParserListener.prototype.exitUnlockTables = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setAutocommitStatement.
MySqlParserListener.prototype.enterSetAutocommitStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setAutocommitStatement.
MySqlParserListener.prototype.exitSetAutocommitStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setTransactionStatement.
MySqlParserListener.prototype.enterSetTransactionStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setTransactionStatement.
MySqlParserListener.prototype.exitSetTransactionStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#transactionMode.
MySqlParserListener.prototype.enterTransactionMode = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#transactionMode.
MySqlParserListener.prototype.exitTransactionMode = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lockTableElement.
MySqlParserListener.prototype.enterLockTableElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lockTableElement.
MySqlParserListener.prototype.exitLockTableElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lockAction.
MySqlParserListener.prototype.enterLockAction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lockAction.
MySqlParserListener.prototype.exitLockAction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#transactionOption.
MySqlParserListener.prototype.enterTransactionOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#transactionOption.
MySqlParserListener.prototype.exitTransactionOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#transactionLevel.
MySqlParserListener.prototype.enterTransactionLevel = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#transactionLevel.
MySqlParserListener.prototype.exitTransactionLevel = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#changeMaster.
MySqlParserListener.prototype.enterChangeMaster = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#changeMaster.
MySqlParserListener.prototype.exitChangeMaster = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#changeReplicationFilter.
MySqlParserListener.prototype.enterChangeReplicationFilter = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#changeReplicationFilter.
MySqlParserListener.prototype.exitChangeReplicationFilter = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#purgeBinaryLogs.
MySqlParserListener.prototype.enterPurgeBinaryLogs = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#purgeBinaryLogs.
MySqlParserListener.prototype.exitPurgeBinaryLogs = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#resetMaster.
MySqlParserListener.prototype.enterResetMaster = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#resetMaster.
MySqlParserListener.prototype.exitResetMaster = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#resetSlave.
MySqlParserListener.prototype.enterResetSlave = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#resetSlave.
MySqlParserListener.prototype.exitResetSlave = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#startSlave.
MySqlParserListener.prototype.enterStartSlave = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#startSlave.
MySqlParserListener.prototype.exitStartSlave = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#stopSlave.
MySqlParserListener.prototype.enterStopSlave = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#stopSlave.
MySqlParserListener.prototype.exitStopSlave = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#startGroupReplication.
MySqlParserListener.prototype.enterStartGroupReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#startGroupReplication.
MySqlParserListener.prototype.exitStartGroupReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#stopGroupReplication.
MySqlParserListener.prototype.enterStopGroupReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#stopGroupReplication.
MySqlParserListener.prototype.exitStopGroupReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#masterStringOption.
MySqlParserListener.prototype.enterMasterStringOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#masterStringOption.
MySqlParserListener.prototype.exitMasterStringOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#masterDecimalOption.
MySqlParserListener.prototype.enterMasterDecimalOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#masterDecimalOption.
MySqlParserListener.prototype.exitMasterDecimalOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#masterBoolOption.
MySqlParserListener.prototype.enterMasterBoolOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#masterBoolOption.
MySqlParserListener.prototype.exitMasterBoolOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#masterRealOption.
MySqlParserListener.prototype.enterMasterRealOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#masterRealOption.
MySqlParserListener.prototype.exitMasterRealOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#masterUidListOption.
MySqlParserListener.prototype.enterMasterUidListOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#masterUidListOption.
MySqlParserListener.prototype.exitMasterUidListOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#stringMasterOption.
MySqlParserListener.prototype.enterStringMasterOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#stringMasterOption.
MySqlParserListener.prototype.exitStringMasterOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#decimalMasterOption.
MySqlParserListener.prototype.enterDecimalMasterOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#decimalMasterOption.
MySqlParserListener.prototype.exitDecimalMasterOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#boolMasterOption.
MySqlParserListener.prototype.enterBoolMasterOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#boolMasterOption.
MySqlParserListener.prototype.exitBoolMasterOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#channelOption.
MySqlParserListener.prototype.enterChannelOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#channelOption.
MySqlParserListener.prototype.exitChannelOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#doDbReplication.
MySqlParserListener.prototype.enterDoDbReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#doDbReplication.
MySqlParserListener.prototype.exitDoDbReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ignoreDbReplication.
MySqlParserListener.prototype.enterIgnoreDbReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ignoreDbReplication.
MySqlParserListener.prototype.exitIgnoreDbReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#doTableReplication.
MySqlParserListener.prototype.enterDoTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#doTableReplication.
MySqlParserListener.prototype.exitDoTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ignoreTableReplication.
MySqlParserListener.prototype.enterIgnoreTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ignoreTableReplication.
MySqlParserListener.prototype.exitIgnoreTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#wildDoTableReplication.
MySqlParserListener.prototype.enterWildDoTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#wildDoTableReplication.
MySqlParserListener.prototype.exitWildDoTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#wildIgnoreTableReplication.
MySqlParserListener.prototype.enterWildIgnoreTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#wildIgnoreTableReplication.
MySqlParserListener.prototype.exitWildIgnoreTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#rewriteDbReplication.
MySqlParserListener.prototype.enterRewriteDbReplication = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#rewriteDbReplication.
MySqlParserListener.prototype.exitRewriteDbReplication = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tablePair.
MySqlParserListener.prototype.enterTablePair = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tablePair.
MySqlParserListener.prototype.exitTablePair = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#threadType.
MySqlParserListener.prototype.enterThreadType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#threadType.
MySqlParserListener.prototype.exitThreadType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#gtidsUntilOption.
MySqlParserListener.prototype.enterGtidsUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#gtidsUntilOption.
MySqlParserListener.prototype.exitGtidsUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#masterLogUntilOption.
MySqlParserListener.prototype.enterMasterLogUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#masterLogUntilOption.
MySqlParserListener.prototype.exitMasterLogUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#relayLogUntilOption.
MySqlParserListener.prototype.enterRelayLogUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#relayLogUntilOption.
MySqlParserListener.prototype.exitRelayLogUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#sqlGapsUntilOption.
MySqlParserListener.prototype.enterSqlGapsUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#sqlGapsUntilOption.
MySqlParserListener.prototype.exitSqlGapsUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userConnectionOption.
MySqlParserListener.prototype.enterUserConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userConnectionOption.
MySqlParserListener.prototype.exitUserConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#passwordConnectionOption.
MySqlParserListener.prototype.enterPasswordConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#passwordConnectionOption.
MySqlParserListener.prototype.exitPasswordConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#defaultAuthConnectionOption.
MySqlParserListener.prototype.enterDefaultAuthConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#defaultAuthConnectionOption.
MySqlParserListener.prototype.exitDefaultAuthConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#pluginDirConnectionOption.
MySqlParserListener.prototype.enterPluginDirConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#pluginDirConnectionOption.
MySqlParserListener.prototype.exitPluginDirConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#gtuidSet.
MySqlParserListener.prototype.enterGtuidSet = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#gtuidSet.
MySqlParserListener.prototype.exitGtuidSet = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xaStartTransaction.
MySqlParserListener.prototype.enterXaStartTransaction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xaStartTransaction.
MySqlParserListener.prototype.exitXaStartTransaction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xaEndTransaction.
MySqlParserListener.prototype.enterXaEndTransaction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xaEndTransaction.
MySqlParserListener.prototype.exitXaEndTransaction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xaPrepareStatement.
MySqlParserListener.prototype.enterXaPrepareStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xaPrepareStatement.
MySqlParserListener.prototype.exitXaPrepareStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xaCommitWork.
MySqlParserListener.prototype.enterXaCommitWork = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xaCommitWork.
MySqlParserListener.prototype.exitXaCommitWork = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xaRollbackWork.
MySqlParserListener.prototype.enterXaRollbackWork = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xaRollbackWork.
MySqlParserListener.prototype.exitXaRollbackWork = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xaRecoverWork.
MySqlParserListener.prototype.enterXaRecoverWork = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xaRecoverWork.
MySqlParserListener.prototype.exitXaRecoverWork = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#prepareStatement.
MySqlParserListener.prototype.enterPrepareStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#prepareStatement.
MySqlParserListener.prototype.exitPrepareStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#executeStatement.
MySqlParserListener.prototype.enterExecuteStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#executeStatement.
MySqlParserListener.prototype.exitExecuteStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#deallocatePrepare.
MySqlParserListener.prototype.enterDeallocatePrepare = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#deallocatePrepare.
MySqlParserListener.prototype.exitDeallocatePrepare = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#routineBody.
MySqlParserListener.prototype.enterRoutineBody = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#routineBody.
MySqlParserListener.prototype.exitRoutineBody = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#blockStatement.
MySqlParserListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#blockStatement.
MySqlParserListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#caseStatement.
MySqlParserListener.prototype.enterCaseStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#caseStatement.
MySqlParserListener.prototype.exitCaseStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ifStatement.
MySqlParserListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ifStatement.
MySqlParserListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#iterateStatement.
MySqlParserListener.prototype.enterIterateStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#iterateStatement.
MySqlParserListener.prototype.exitIterateStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#leaveStatement.
MySqlParserListener.prototype.enterLeaveStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#leaveStatement.
MySqlParserListener.prototype.exitLeaveStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#loopStatement.
MySqlParserListener.prototype.enterLoopStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#loopStatement.
MySqlParserListener.prototype.exitLoopStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#repeatStatement.
MySqlParserListener.prototype.enterRepeatStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#repeatStatement.
MySqlParserListener.prototype.exitRepeatStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#returnStatement.
MySqlParserListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#returnStatement.
MySqlParserListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#whileStatement.
MySqlParserListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#whileStatement.
MySqlParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#CloseCursor.
MySqlParserListener.prototype.enterCloseCursor = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#CloseCursor.
MySqlParserListener.prototype.exitCloseCursor = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#FetchCursor.
MySqlParserListener.prototype.enterFetchCursor = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#FetchCursor.
MySqlParserListener.prototype.exitFetchCursor = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#OpenCursor.
MySqlParserListener.prototype.enterOpenCursor = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#OpenCursor.
MySqlParserListener.prototype.exitOpenCursor = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#declareVariable.
MySqlParserListener.prototype.enterDeclareVariable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#declareVariable.
MySqlParserListener.prototype.exitDeclareVariable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#declareCondition.
MySqlParserListener.prototype.enterDeclareCondition = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#declareCondition.
MySqlParserListener.prototype.exitDeclareCondition = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#declareCursor.
MySqlParserListener.prototype.enterDeclareCursor = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#declareCursor.
MySqlParserListener.prototype.exitDeclareCursor = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#declareHandler.
MySqlParserListener.prototype.enterDeclareHandler = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#declareHandler.
MySqlParserListener.prototype.exitDeclareHandler = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerConditionCode.
MySqlParserListener.prototype.enterHandlerConditionCode = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerConditionCode.
MySqlParserListener.prototype.exitHandlerConditionCode = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerConditionState.
MySqlParserListener.prototype.enterHandlerConditionState = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerConditionState.
MySqlParserListener.prototype.exitHandlerConditionState = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerConditionName.
MySqlParserListener.prototype.enterHandlerConditionName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerConditionName.
MySqlParserListener.prototype.exitHandlerConditionName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerConditionWarning.
MySqlParserListener.prototype.enterHandlerConditionWarning = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerConditionWarning.
MySqlParserListener.prototype.exitHandlerConditionWarning = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerConditionNotfound.
MySqlParserListener.prototype.enterHandlerConditionNotfound = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerConditionNotfound.
MySqlParserListener.prototype.exitHandlerConditionNotfound = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#handlerConditionException.
MySqlParserListener.prototype.enterHandlerConditionException = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#handlerConditionException.
MySqlParserListener.prototype.exitHandlerConditionException = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#procedureSqlStatement.
MySqlParserListener.prototype.enterProcedureSqlStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#procedureSqlStatement.
MySqlParserListener.prototype.exitProcedureSqlStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#caseAlternative.
MySqlParserListener.prototype.enterCaseAlternative = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#caseAlternative.
MySqlParserListener.prototype.exitCaseAlternative = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#elifAlternative.
MySqlParserListener.prototype.enterElifAlternative = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#elifAlternative.
MySqlParserListener.prototype.exitElifAlternative = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterUserMysqlV56.
MySqlParserListener.prototype.enterAlterUserMysqlV56 = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterUserMysqlV56.
MySqlParserListener.prototype.exitAlterUserMysqlV56 = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#alterUserMysqlV57.
MySqlParserListener.prototype.enterAlterUserMysqlV57 = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#alterUserMysqlV57.
MySqlParserListener.prototype.exitAlterUserMysqlV57 = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createUserMysqlV56.
MySqlParserListener.prototype.enterCreateUserMysqlV56 = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createUserMysqlV56.
MySqlParserListener.prototype.exitCreateUserMysqlV56 = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createUserMysqlV57.
MySqlParserListener.prototype.enterCreateUserMysqlV57 = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createUserMysqlV57.
MySqlParserListener.prototype.exitCreateUserMysqlV57 = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dropUser.
MySqlParserListener.prototype.enterDropUser = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dropUser.
MySqlParserListener.prototype.exitDropUser = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#grantStatement.
MySqlParserListener.prototype.enterGrantStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#grantStatement.
MySqlParserListener.prototype.exitGrantStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#grantProxy.
MySqlParserListener.prototype.enterGrantProxy = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#grantProxy.
MySqlParserListener.prototype.exitGrantProxy = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#renameUser.
MySqlParserListener.prototype.enterRenameUser = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#renameUser.
MySqlParserListener.prototype.exitRenameUser = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#detailRevoke.
MySqlParserListener.prototype.enterDetailRevoke = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#detailRevoke.
MySqlParserListener.prototype.exitDetailRevoke = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#shortRevoke.
MySqlParserListener.prototype.enterShortRevoke = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#shortRevoke.
MySqlParserListener.prototype.exitShortRevoke = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#revokeProxy.
MySqlParserListener.prototype.enterRevokeProxy = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#revokeProxy.
MySqlParserListener.prototype.exitRevokeProxy = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setPasswordStatement.
MySqlParserListener.prototype.enterSetPasswordStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setPasswordStatement.
MySqlParserListener.prototype.exitSetPasswordStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userSpecification.
MySqlParserListener.prototype.enterUserSpecification = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userSpecification.
MySqlParserListener.prototype.exitUserSpecification = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#passwordAuthOption.
MySqlParserListener.prototype.enterPasswordAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#passwordAuthOption.
MySqlParserListener.prototype.exitPasswordAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#stringAuthOption.
MySqlParserListener.prototype.enterStringAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#stringAuthOption.
MySqlParserListener.prototype.exitStringAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#hashAuthOption.
MySqlParserListener.prototype.enterHashAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#hashAuthOption.
MySqlParserListener.prototype.exitHashAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleAuthOption.
MySqlParserListener.prototype.enterSimpleAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleAuthOption.
MySqlParserListener.prototype.exitSimpleAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tlsOption.
MySqlParserListener.prototype.enterTlsOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tlsOption.
MySqlParserListener.prototype.exitTlsOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userResourceOption.
MySqlParserListener.prototype.enterUserResourceOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userResourceOption.
MySqlParserListener.prototype.exitUserResourceOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userPasswordOption.
MySqlParserListener.prototype.enterUserPasswordOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userPasswordOption.
MySqlParserListener.prototype.exitUserPasswordOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userLockOption.
MySqlParserListener.prototype.enterUserLockOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userLockOption.
MySqlParserListener.prototype.exitUserLockOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#privelegeClause.
MySqlParserListener.prototype.enterPrivelegeClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#privelegeClause.
MySqlParserListener.prototype.exitPrivelegeClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#privilege.
MySqlParserListener.prototype.enterPrivilege = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#privilege.
MySqlParserListener.prototype.exitPrivilege = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#currentSchemaPriviLevel.
MySqlParserListener.prototype.enterCurrentSchemaPriviLevel = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#currentSchemaPriviLevel.
MySqlParserListener.prototype.exitCurrentSchemaPriviLevel = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#globalPrivLevel.
MySqlParserListener.prototype.enterGlobalPrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#globalPrivLevel.
MySqlParserListener.prototype.exitGlobalPrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#definiteSchemaPrivLevel.
MySqlParserListener.prototype.enterDefiniteSchemaPrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#definiteSchemaPrivLevel.
MySqlParserListener.prototype.exitDefiniteSchemaPrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#definiteFullTablePrivLevel.
MySqlParserListener.prototype.enterDefiniteFullTablePrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#definiteFullTablePrivLevel.
MySqlParserListener.prototype.exitDefiniteFullTablePrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#definiteFullTablePrivLevel2.
MySqlParserListener.prototype.enterDefiniteFullTablePrivLevel2 = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#definiteFullTablePrivLevel2.
MySqlParserListener.prototype.exitDefiniteFullTablePrivLevel2 = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#definiteTablePrivLevel.
MySqlParserListener.prototype.enterDefiniteTablePrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#definiteTablePrivLevel.
MySqlParserListener.prototype.exitDefiniteTablePrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#renameUserClause.
MySqlParserListener.prototype.enterRenameUserClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#renameUserClause.
MySqlParserListener.prototype.exitRenameUserClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#analyzeTable.
MySqlParserListener.prototype.enterAnalyzeTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#analyzeTable.
MySqlParserListener.prototype.exitAnalyzeTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#checkTable.
MySqlParserListener.prototype.enterCheckTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#checkTable.
MySqlParserListener.prototype.exitCheckTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#checksumTable.
MySqlParserListener.prototype.enterChecksumTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#checksumTable.
MySqlParserListener.prototype.exitChecksumTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#optimizeTable.
MySqlParserListener.prototype.enterOptimizeTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#optimizeTable.
MySqlParserListener.prototype.exitOptimizeTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#repairTable.
MySqlParserListener.prototype.enterRepairTable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#repairTable.
MySqlParserListener.prototype.exitRepairTable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#checkTableOption.
MySqlParserListener.prototype.enterCheckTableOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#checkTableOption.
MySqlParserListener.prototype.exitCheckTableOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#createUdfunction.
MySqlParserListener.prototype.enterCreateUdfunction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#createUdfunction.
MySqlParserListener.prototype.exitCreateUdfunction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#installPlugin.
MySqlParserListener.prototype.enterInstallPlugin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#installPlugin.
MySqlParserListener.prototype.exitInstallPlugin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#uninstallPlugin.
MySqlParserListener.prototype.enterUninstallPlugin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#uninstallPlugin.
MySqlParserListener.prototype.exitUninstallPlugin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setVariable.
MySqlParserListener.prototype.enterSetVariable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setVariable.
MySqlParserListener.prototype.exitSetVariable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setCharset.
MySqlParserListener.prototype.enterSetCharset = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setCharset.
MySqlParserListener.prototype.exitSetCharset = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setNames.
MySqlParserListener.prototype.enterSetNames = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setNames.
MySqlParserListener.prototype.exitSetNames = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setPassword.
MySqlParserListener.prototype.enterSetPassword = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setPassword.
MySqlParserListener.prototype.exitSetPassword = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setTransaction.
MySqlParserListener.prototype.enterSetTransaction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setTransaction.
MySqlParserListener.prototype.exitSetTransaction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setAutocommit.
MySqlParserListener.prototype.enterSetAutocommit = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setAutocommit.
MySqlParserListener.prototype.exitSetAutocommit = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#setNewValueInsideTrigger.
MySqlParserListener.prototype.enterSetNewValueInsideTrigger = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#setNewValueInsideTrigger.
MySqlParserListener.prototype.exitSetNewValueInsideTrigger = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showMasterLogs.
MySqlParserListener.prototype.enterShowMasterLogs = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showMasterLogs.
MySqlParserListener.prototype.exitShowMasterLogs = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showLogEvents.
MySqlParserListener.prototype.enterShowLogEvents = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showLogEvents.
MySqlParserListener.prototype.exitShowLogEvents = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showObjectFilter.
MySqlParserListener.prototype.enterShowObjectFilter = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showObjectFilter.
MySqlParserListener.prototype.exitShowObjectFilter = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showColumns.
MySqlParserListener.prototype.enterShowColumns = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showColumns.
MySqlParserListener.prototype.exitShowColumns = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showCreateDb.
MySqlParserListener.prototype.enterShowCreateDb = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showCreateDb.
MySqlParserListener.prototype.exitShowCreateDb = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showCreateFullIdObject.
MySqlParserListener.prototype.enterShowCreateFullIdObject = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showCreateFullIdObject.
MySqlParserListener.prototype.exitShowCreateFullIdObject = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showCreateUser.
MySqlParserListener.prototype.enterShowCreateUser = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showCreateUser.
MySqlParserListener.prototype.exitShowCreateUser = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showEngine.
MySqlParserListener.prototype.enterShowEngine = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showEngine.
MySqlParserListener.prototype.exitShowEngine = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showGlobalInfo.
MySqlParserListener.prototype.enterShowGlobalInfo = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showGlobalInfo.
MySqlParserListener.prototype.exitShowGlobalInfo = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showErrors.
MySqlParserListener.prototype.enterShowErrors = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showErrors.
MySqlParserListener.prototype.exitShowErrors = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showCountErrors.
MySqlParserListener.prototype.enterShowCountErrors = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showCountErrors.
MySqlParserListener.prototype.exitShowCountErrors = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showSchemaFilter.
MySqlParserListener.prototype.enterShowSchemaFilter = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showSchemaFilter.
MySqlParserListener.prototype.exitShowSchemaFilter = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showRoutine.
MySqlParserListener.prototype.enterShowRoutine = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showRoutine.
MySqlParserListener.prototype.exitShowRoutine = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showGrants.
MySqlParserListener.prototype.enterShowGrants = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showGrants.
MySqlParserListener.prototype.exitShowGrants = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showIndexes.
MySqlParserListener.prototype.enterShowIndexes = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showIndexes.
MySqlParserListener.prototype.exitShowIndexes = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showOpenTables.
MySqlParserListener.prototype.enterShowOpenTables = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showOpenTables.
MySqlParserListener.prototype.exitShowOpenTables = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showProfile.
MySqlParserListener.prototype.enterShowProfile = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showProfile.
MySqlParserListener.prototype.exitShowProfile = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showSlaveStatus.
MySqlParserListener.prototype.enterShowSlaveStatus = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showSlaveStatus.
MySqlParserListener.prototype.exitShowSlaveStatus = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#variableClause.
MySqlParserListener.prototype.enterVariableClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#variableClause.
MySqlParserListener.prototype.exitVariableClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showCommonEntity.
MySqlParserListener.prototype.enterShowCommonEntity = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showCommonEntity.
MySqlParserListener.prototype.exitShowCommonEntity = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showFilter.
MySqlParserListener.prototype.enterShowFilter = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showFilter.
MySqlParserListener.prototype.exitShowFilter = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showGlobalInfoClause.
MySqlParserListener.prototype.enterShowGlobalInfoClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showGlobalInfoClause.
MySqlParserListener.prototype.exitShowGlobalInfoClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showSchemaEntity.
MySqlParserListener.prototype.enterShowSchemaEntity = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showSchemaEntity.
MySqlParserListener.prototype.exitShowSchemaEntity = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#showProfileType.
MySqlParserListener.prototype.enterShowProfileType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#showProfileType.
MySqlParserListener.prototype.exitShowProfileType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#binlogStatement.
MySqlParserListener.prototype.enterBinlogStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#binlogStatement.
MySqlParserListener.prototype.exitBinlogStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#cacheIndexStatement.
MySqlParserListener.prototype.enterCacheIndexStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#cacheIndexStatement.
MySqlParserListener.prototype.exitCacheIndexStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#flushStatement.
MySqlParserListener.prototype.enterFlushStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#flushStatement.
MySqlParserListener.prototype.exitFlushStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#killStatement.
MySqlParserListener.prototype.enterKillStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#killStatement.
MySqlParserListener.prototype.exitKillStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#loadIndexIntoCache.
MySqlParserListener.prototype.enterLoadIndexIntoCache = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#loadIndexIntoCache.
MySqlParserListener.prototype.exitLoadIndexIntoCache = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#resetStatement.
MySqlParserListener.prototype.enterResetStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#resetStatement.
MySqlParserListener.prototype.exitResetStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#shutdownStatement.
MySqlParserListener.prototype.enterShutdownStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#shutdownStatement.
MySqlParserListener.prototype.exitShutdownStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableIndexes.
MySqlParserListener.prototype.enterTableIndexes = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableIndexes.
MySqlParserListener.prototype.exitTableIndexes = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleFlushOption.
MySqlParserListener.prototype.enterSimpleFlushOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleFlushOption.
MySqlParserListener.prototype.exitSimpleFlushOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#channelFlushOption.
MySqlParserListener.prototype.enterChannelFlushOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#channelFlushOption.
MySqlParserListener.prototype.exitChannelFlushOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableFlushOption.
MySqlParserListener.prototype.enterTableFlushOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableFlushOption.
MySqlParserListener.prototype.exitTableFlushOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#flushTableOption.
MySqlParserListener.prototype.enterFlushTableOption = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#flushTableOption.
MySqlParserListener.prototype.exitFlushTableOption = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#loadedTableIndexes.
MySqlParserListener.prototype.enterLoadedTableIndexes = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#loadedTableIndexes.
MySqlParserListener.prototype.exitLoadedTableIndexes = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleDescribeStatement.
MySqlParserListener.prototype.enterSimpleDescribeStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleDescribeStatement.
MySqlParserListener.prototype.exitSimpleDescribeStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#fullDescribeStatement.
MySqlParserListener.prototype.enterFullDescribeStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#fullDescribeStatement.
MySqlParserListener.prototype.exitFullDescribeStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#helpStatement.
MySqlParserListener.prototype.enterHelpStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#helpStatement.
MySqlParserListener.prototype.exitHelpStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#useStatement.
MySqlParserListener.prototype.enterUseStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#useStatement.
MySqlParserListener.prototype.exitUseStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#signalStatement.
MySqlParserListener.prototype.enterSignalStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#signalStatement.
MySqlParserListener.prototype.exitSignalStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#resignalStatement.
MySqlParserListener.prototype.enterResignalStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#resignalStatement.
MySqlParserListener.prototype.exitResignalStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#signalConditionInformation.
MySqlParserListener.prototype.enterSignalConditionInformation = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#signalConditionInformation.
MySqlParserListener.prototype.exitSignalConditionInformation = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#diagnosticsStatement.
MySqlParserListener.prototype.enterDiagnosticsStatement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#diagnosticsStatement.
MySqlParserListener.prototype.exitDiagnosticsStatement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#diagnosticsConditionInformationName.
MySqlParserListener.prototype.enterDiagnosticsConditionInformationName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#diagnosticsConditionInformationName.
MySqlParserListener.prototype.exitDiagnosticsConditionInformationName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#describeStatements.
MySqlParserListener.prototype.enterDescribeStatements = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#describeStatements.
MySqlParserListener.prototype.exitDescribeStatements = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#describeConnection.
MySqlParserListener.prototype.enterDescribeConnection = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#describeConnection.
MySqlParserListener.prototype.exitDescribeConnection = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#fullId.
MySqlParserListener.prototype.enterFullId = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#fullId.
MySqlParserListener.prototype.exitFullId = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tableName.
MySqlParserListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tableName.
MySqlParserListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#fullColumnName.
MySqlParserListener.prototype.enterFullColumnName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#fullColumnName.
MySqlParserListener.prototype.exitFullColumnName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexColumnName.
MySqlParserListener.prototype.enterIndexColumnName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexColumnName.
MySqlParserListener.prototype.exitIndexColumnName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userName.
MySqlParserListener.prototype.enterUserName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userName.
MySqlParserListener.prototype.exitUserName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#mysqlVariable.
MySqlParserListener.prototype.enterMysqlVariable = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#mysqlVariable.
MySqlParserListener.prototype.exitMysqlVariable = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#charsetName.
MySqlParserListener.prototype.enterCharsetName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#charsetName.
MySqlParserListener.prototype.exitCharsetName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#collationName.
MySqlParserListener.prototype.enterCollationName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#collationName.
MySqlParserListener.prototype.exitCollationName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#engineName.
MySqlParserListener.prototype.enterEngineName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#engineName.
MySqlParserListener.prototype.exitEngineName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#uuidSet.
MySqlParserListener.prototype.enterUuidSet = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#uuidSet.
MySqlParserListener.prototype.exitUuidSet = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xid.
MySqlParserListener.prototype.enterXid = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xid.
MySqlParserListener.prototype.exitXid = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#xuidStringId.
MySqlParserListener.prototype.enterXuidStringId = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#xuidStringId.
MySqlParserListener.prototype.exitXuidStringId = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#authPlugin.
MySqlParserListener.prototype.enterAuthPlugin = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#authPlugin.
MySqlParserListener.prototype.exitAuthPlugin = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#uid.
MySqlParserListener.prototype.enterUid = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#uid.
MySqlParserListener.prototype.exitUid = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleId.
MySqlParserListener.prototype.enterSimpleId = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleId.
MySqlParserListener.prototype.exitSimpleId = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dottedId.
MySqlParserListener.prototype.enterDottedId = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dottedId.
MySqlParserListener.prototype.exitDottedId = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#decimalLiteral.
MySqlParserListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#decimalLiteral.
MySqlParserListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#fileSizeLiteral.
MySqlParserListener.prototype.enterFileSizeLiteral = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#fileSizeLiteral.
MySqlParserListener.prototype.exitFileSizeLiteral = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#stringLiteral.
MySqlParserListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#stringLiteral.
MySqlParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#booleanLiteral.
MySqlParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#booleanLiteral.
MySqlParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#hexadecimalLiteral.
MySqlParserListener.prototype.enterHexadecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#hexadecimalLiteral.
MySqlParserListener.prototype.exitHexadecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#nullNotnull.
MySqlParserListener.prototype.enterNullNotnull = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#nullNotnull.
MySqlParserListener.prototype.exitNullNotnull = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#constant.
MySqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#constant.
MySqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#stringDataType.
MySqlParserListener.prototype.enterStringDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#stringDataType.
MySqlParserListener.prototype.exitStringDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#nationalStringDataType.
MySqlParserListener.prototype.enterNationalStringDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#nationalStringDataType.
MySqlParserListener.prototype.exitNationalStringDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#nationalVaryingStringDataType.
MySqlParserListener.prototype.enterNationalVaryingStringDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#nationalVaryingStringDataType.
MySqlParserListener.prototype.exitNationalVaryingStringDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dimensionDataType.
MySqlParserListener.prototype.enterDimensionDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dimensionDataType.
MySqlParserListener.prototype.exitDimensionDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleDataType.
MySqlParserListener.prototype.enterSimpleDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleDataType.
MySqlParserListener.prototype.exitSimpleDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#collectionDataType.
MySqlParserListener.prototype.enterCollectionDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#collectionDataType.
MySqlParserListener.prototype.exitCollectionDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#spatialDataType.
MySqlParserListener.prototype.enterSpatialDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#spatialDataType.
MySqlParserListener.prototype.exitSpatialDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#longVarcharDataType.
MySqlParserListener.prototype.enterLongVarcharDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#longVarcharDataType.
MySqlParserListener.prototype.exitLongVarcharDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#longVarbinaryDataType.
MySqlParserListener.prototype.enterLongVarbinaryDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#longVarbinaryDataType.
MySqlParserListener.prototype.exitLongVarbinaryDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#collectionOptions.
MySqlParserListener.prototype.enterCollectionOptions = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#collectionOptions.
MySqlParserListener.prototype.exitCollectionOptions = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#convertedDataType.
MySqlParserListener.prototype.enterConvertedDataType = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#convertedDataType.
MySqlParserListener.prototype.exitConvertedDataType = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lengthOneDimension.
MySqlParserListener.prototype.enterLengthOneDimension = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lengthOneDimension.
MySqlParserListener.prototype.exitLengthOneDimension = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lengthTwoDimension.
MySqlParserListener.prototype.enterLengthTwoDimension = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lengthTwoDimension.
MySqlParserListener.prototype.exitLengthTwoDimension = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#lengthTwoOptionalDimension.
MySqlParserListener.prototype.enterLengthTwoOptionalDimension = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#lengthTwoOptionalDimension.
MySqlParserListener.prototype.exitLengthTwoOptionalDimension = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#uidList.
MySqlParserListener.prototype.enterUidList = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#uidList.
MySqlParserListener.prototype.exitUidList = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#tables.
MySqlParserListener.prototype.enterTables = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#tables.
MySqlParserListener.prototype.exitTables = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#indexColumnNames.
MySqlParserListener.prototype.enterIndexColumnNames = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#indexColumnNames.
MySqlParserListener.prototype.exitIndexColumnNames = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#expressions.
MySqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#expressions.
MySqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#expressionsWithDefaults.
MySqlParserListener.prototype.enterExpressionsWithDefaults = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#expressionsWithDefaults.
MySqlParserListener.prototype.exitExpressionsWithDefaults = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#constants.
MySqlParserListener.prototype.enterConstants = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#constants.
MySqlParserListener.prototype.exitConstants = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleStrings.
MySqlParserListener.prototype.enterSimpleStrings = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleStrings.
MySqlParserListener.prototype.exitSimpleStrings = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#userVariables.
MySqlParserListener.prototype.enterUserVariables = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#userVariables.
MySqlParserListener.prototype.exitUserVariables = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#defaultValue.
MySqlParserListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#defaultValue.
MySqlParserListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#currentTimestamp.
MySqlParserListener.prototype.enterCurrentTimestamp = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#currentTimestamp.
MySqlParserListener.prototype.exitCurrentTimestamp = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#expressionOrDefault.
MySqlParserListener.prototype.enterExpressionOrDefault = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#expressionOrDefault.
MySqlParserListener.prototype.exitExpressionOrDefault = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ifExists.
MySqlParserListener.prototype.enterIfExists = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ifExists.
MySqlParserListener.prototype.exitIfExists = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#ifNotExists.
MySqlParserListener.prototype.enterIfNotExists = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#ifNotExists.
MySqlParserListener.prototype.exitIfNotExists = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#specificFunctionCall.
MySqlParserListener.prototype.enterSpecificFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#specificFunctionCall.
MySqlParserListener.prototype.exitSpecificFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#aggregateFunctionCall.
MySqlParserListener.prototype.enterAggregateFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#aggregateFunctionCall.
MySqlParserListener.prototype.exitAggregateFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#scalarFunctionCall.
MySqlParserListener.prototype.enterScalarFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#scalarFunctionCall.
MySqlParserListener.prototype.exitScalarFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#udfFunctionCall.
MySqlParserListener.prototype.enterUdfFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#udfFunctionCall.
MySqlParserListener.prototype.exitUdfFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#passwordFunctionCall.
MySqlParserListener.prototype.enterPasswordFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#passwordFunctionCall.
MySqlParserListener.prototype.exitPasswordFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#simpleFunctionCall.
MySqlParserListener.prototype.enterSimpleFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#simpleFunctionCall.
MySqlParserListener.prototype.exitSimpleFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dataTypeFunctionCall.
MySqlParserListener.prototype.enterDataTypeFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dataTypeFunctionCall.
MySqlParserListener.prototype.exitDataTypeFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#valuesFunctionCall.
MySqlParserListener.prototype.enterValuesFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#valuesFunctionCall.
MySqlParserListener.prototype.exitValuesFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#caseFunctionCall.
MySqlParserListener.prototype.enterCaseFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#caseFunctionCall.
MySqlParserListener.prototype.exitCaseFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#charFunctionCall.
MySqlParserListener.prototype.enterCharFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#charFunctionCall.
MySqlParserListener.prototype.exitCharFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#positionFunctionCall.
MySqlParserListener.prototype.enterPositionFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#positionFunctionCall.
MySqlParserListener.prototype.exitPositionFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#substrFunctionCall.
MySqlParserListener.prototype.enterSubstrFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#substrFunctionCall.
MySqlParserListener.prototype.exitSubstrFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#trimFunctionCall.
MySqlParserListener.prototype.enterTrimFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#trimFunctionCall.
MySqlParserListener.prototype.exitTrimFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#weightFunctionCall.
MySqlParserListener.prototype.enterWeightFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#weightFunctionCall.
MySqlParserListener.prototype.exitWeightFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#extractFunctionCall.
MySqlParserListener.prototype.enterExtractFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#extractFunctionCall.
MySqlParserListener.prototype.exitExtractFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#getFormatFunctionCall.
MySqlParserListener.prototype.enterGetFormatFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#getFormatFunctionCall.
MySqlParserListener.prototype.exitGetFormatFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#caseFuncAlternative.
MySqlParserListener.prototype.enterCaseFuncAlternative = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#caseFuncAlternative.
MySqlParserListener.prototype.exitCaseFuncAlternative = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#levelWeightList.
MySqlParserListener.prototype.enterLevelWeightList = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#levelWeightList.
MySqlParserListener.prototype.exitLevelWeightList = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#levelWeightRange.
MySqlParserListener.prototype.enterLevelWeightRange = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#levelWeightRange.
MySqlParserListener.prototype.exitLevelWeightRange = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#levelInWeightListElement.
MySqlParserListener.prototype.enterLevelInWeightListElement = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#levelInWeightListElement.
MySqlParserListener.prototype.exitLevelInWeightListElement = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#aggregateWindowedFunction.
MySqlParserListener.prototype.enterAggregateWindowedFunction = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#aggregateWindowedFunction.
MySqlParserListener.prototype.exitAggregateWindowedFunction = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#scalarFunctionName.
MySqlParserListener.prototype.enterScalarFunctionName = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#scalarFunctionName.
MySqlParserListener.prototype.exitScalarFunctionName = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#passwordFunctionClause.
MySqlParserListener.prototype.enterPasswordFunctionClause = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#passwordFunctionClause.
MySqlParserListener.prototype.exitPasswordFunctionClause = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#functionArgs.
MySqlParserListener.prototype.enterFunctionArgs = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#functionArgs.
MySqlParserListener.prototype.exitFunctionArgs = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#functionArg.
MySqlParserListener.prototype.enterFunctionArg = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#functionArg.
MySqlParserListener.prototype.exitFunctionArg = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#isExpression.
MySqlParserListener.prototype.enterIsExpression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#isExpression.
MySqlParserListener.prototype.exitIsExpression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#notExpression.
MySqlParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#notExpression.
MySqlParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#logicalExpression.
MySqlParserListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#logicalExpression.
MySqlParserListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#predicateExpression.
MySqlParserListener.prototype.enterPredicateExpression = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#predicateExpression.
MySqlParserListener.prototype.exitPredicateExpression = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#soundsLikePredicate.
MySqlParserListener.prototype.enterSoundsLikePredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#soundsLikePredicate.
MySqlParserListener.prototype.exitSoundsLikePredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#expressionAtomPredicate.
MySqlParserListener.prototype.enterExpressionAtomPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#expressionAtomPredicate.
MySqlParserListener.prototype.exitExpressionAtomPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#inPredicate.
MySqlParserListener.prototype.enterInPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#inPredicate.
MySqlParserListener.prototype.exitInPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#subqueryComparasionPredicate.
MySqlParserListener.prototype.enterSubqueryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#subqueryComparasionPredicate.
MySqlParserListener.prototype.exitSubqueryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#betweenPredicate.
MySqlParserListener.prototype.enterBetweenPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#betweenPredicate.
MySqlParserListener.prototype.exitBetweenPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#binaryComparasionPredicate.
MySqlParserListener.prototype.enterBinaryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#binaryComparasionPredicate.
MySqlParserListener.prototype.exitBinaryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#isNullPredicate.
MySqlParserListener.prototype.enterIsNullPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#isNullPredicate.
MySqlParserListener.prototype.exitIsNullPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#likePredicate.
MySqlParserListener.prototype.enterLikePredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#likePredicate.
MySqlParserListener.prototype.exitLikePredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#regexpPredicate.
MySqlParserListener.prototype.enterRegexpPredicate = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#regexpPredicate.
MySqlParserListener.prototype.exitRegexpPredicate = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unaryExpressionAtom.
MySqlParserListener.prototype.enterUnaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unaryExpressionAtom.
MySqlParserListener.prototype.exitUnaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#collateExpressionAtom.
MySqlParserListener.prototype.enterCollateExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#collateExpressionAtom.
MySqlParserListener.prototype.exitCollateExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#subqueryExpessionAtom.
MySqlParserListener.prototype.enterSubqueryExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#subqueryExpessionAtom.
MySqlParserListener.prototype.exitSubqueryExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#mysqlVariableExpressionAtom.
MySqlParserListener.prototype.enterMysqlVariableExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#mysqlVariableExpressionAtom.
MySqlParserListener.prototype.exitMysqlVariableExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#nestedExpressionAtom.
MySqlParserListener.prototype.enterNestedExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#nestedExpressionAtom.
MySqlParserListener.prototype.exitNestedExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#nestedRowExpressionAtom.
MySqlParserListener.prototype.enterNestedRowExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#nestedRowExpressionAtom.
MySqlParserListener.prototype.exitNestedRowExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#mathExpressionAtom.
MySqlParserListener.prototype.enterMathExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#mathExpressionAtom.
MySqlParserListener.prototype.exitMathExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#intervalExpressionAtom.
MySqlParserListener.prototype.enterIntervalExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#intervalExpressionAtom.
MySqlParserListener.prototype.exitIntervalExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#existsExpessionAtom.
MySqlParserListener.prototype.enterExistsExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#existsExpessionAtom.
MySqlParserListener.prototype.exitExistsExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#constantExpressionAtom.
MySqlParserListener.prototype.enterConstantExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#constantExpressionAtom.
MySqlParserListener.prototype.exitConstantExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#functionCallExpressionAtom.
MySqlParserListener.prototype.enterFunctionCallExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#functionCallExpressionAtom.
MySqlParserListener.prototype.exitFunctionCallExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#binaryExpressionAtom.
MySqlParserListener.prototype.enterBinaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#binaryExpressionAtom.
MySqlParserListener.prototype.exitBinaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#fullColumnNameExpressionAtom.
MySqlParserListener.prototype.enterFullColumnNameExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#fullColumnNameExpressionAtom.
MySqlParserListener.prototype.exitFullColumnNameExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#bitExpressionAtom.
MySqlParserListener.prototype.enterBitExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#bitExpressionAtom.
MySqlParserListener.prototype.exitBitExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#unaryOperator.
MySqlParserListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#unaryOperator.
MySqlParserListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#comparisonOperator.
MySqlParserListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#comparisonOperator.
MySqlParserListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#logicalOperator.
MySqlParserListener.prototype.enterLogicalOperator = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#logicalOperator.
MySqlParserListener.prototype.exitLogicalOperator = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#bitOperator.
MySqlParserListener.prototype.enterBitOperator = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#bitOperator.
MySqlParserListener.prototype.exitBitOperator = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#mathOperator.
MySqlParserListener.prototype.enterMathOperator = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#mathOperator.
MySqlParserListener.prototype.exitMathOperator = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#charsetNameBase.
MySqlParserListener.prototype.enterCharsetNameBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#charsetNameBase.
MySqlParserListener.prototype.exitCharsetNameBase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#transactionLevelBase.
MySqlParserListener.prototype.enterTransactionLevelBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#transactionLevelBase.
MySqlParserListener.prototype.exitTransactionLevelBase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#privilegesBase.
MySqlParserListener.prototype.enterPrivilegesBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#privilegesBase.
MySqlParserListener.prototype.exitPrivilegesBase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#intervalTypeBase.
MySqlParserListener.prototype.enterIntervalTypeBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#intervalTypeBase.
MySqlParserListener.prototype.exitIntervalTypeBase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#dataTypeBase.
MySqlParserListener.prototype.enterDataTypeBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#dataTypeBase.
MySqlParserListener.prototype.exitDataTypeBase = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#keywordsCanBeId.
MySqlParserListener.prototype.enterKeywordsCanBeId = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#keywordsCanBeId.
MySqlParserListener.prototype.exitKeywordsCanBeId = function(ctx) {
};


// Enter a parse tree produced by MySqlParser#functionNameBase.
MySqlParserListener.prototype.enterFunctionNameBase = function(ctx) {
};

// Exit a parse tree produced by MySqlParser#functionNameBase.
MySqlParserListener.prototype.exitFunctionNameBase = function(ctx) {
};



exports.MySqlParserListener = MySqlParserListener;
