-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: physiodocs
-- ------------------------------------------------------
-- Server version       8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `body_assessment`
--

DROP TABLE IF EXISTS `body_assessment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `body_assessment` (
  `Dept_ID` int NOT NULL,
  `Patient_ID` int NOT NULL,
  `Assessment_Type` varchar(45) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `body_assessment`
--

LOCK TABLES `body_assessment` WRITE;
/*!40000 ALTER TABLE `body_assessment` DISABLE KEYS */;
/*!40000 ALTER TABLE `body_assessment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `Dept_ID` int NOT NULL AUTO_INCREMENT,
  `Department_Name` varchar(200) NOT NULL,
  `Creation_Date` datetime NOT NULL,
  PRIMARY KEY (`Dept_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objective_assesments`
--

DROP TABLE IF EXISTS `objective_assesments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objective_assesments` (
  `Patient_ID` int NOT NULL,
  `Assessment_Type` varchar(200) NOT NULL,
  `Relevent_Manual_Muscle_Testing` varchar(1000) DEFAULT NULL,
  `Relevent_Soft_Tissue_Testing` varchar(1000) NOT NULL,
  `Total_Assessment` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objective_assesments`
--

LOCK TABLES `objective_assesments` WRITE;
/*!40000 ALTER TABLE `objective_assesments` DISABLE KEYS */;
/*!40000 ALTER TABLE `objective_assesments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_details`
--

DROP TABLE IF EXISTS `patient_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_details` (
  `Pateint_ID` int NOT NULL AUTO_INCREMENT,
  `Dept_ID` int DEFAULT NULL,
  `Patient_Name` varchar(200) DEFAULT NULL,
  `Age` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `preferred_Lang` varchar(100) DEFAULT NULL,
  `Diagnosis` varchar(100) DEFAULT NULL,
  `VitalsLastRecorded` varchar(100) DEFAULT NULL,
  `ReferringPhysician` varchar(100) DEFAULT NULL,
  `ModeofPayment` varchar(100) DEFAULT NULL,
  `TreatingTherapist` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Pateint_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_details`
--

LOCK TABLES `patient_details` WRITE;
/*!40000 ALTER TABLE `patient_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_of_treatment`
--

DROP TABLE IF EXISTS `plan_of_treatment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_of_treatment` (
  `Patient_ID` int NOT NULL,
  `Assessment_Type` varchar(200) NOT NULL,
  `Long_Term_Goals` varchar(1000) DEFAULT NULL,
  `Short_Term_Goals` varchar(1000) NOT NULL,
  `Treatment_Given` varchar(1000) NOT NULL,
  `Final_Comments` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_of_treatment`
--

LOCK TABLES `plan_of_treatment` WRITE;
/*!40000 ALTER TABLE `plan_of_treatment` DISABLE KEYS */;
/*!40000 ALTER TABLE `plan_of_treatment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjective_assessments`
--

DROP TABLE IF EXISTS `subjective_assessments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjective_assessments` (
  `Patient_ID` int NOT NULL,
  `Assessment_Type` varchar(200) NOT NULL,
  `Medical_Diagnosis` varchar(1000) NOT NULL,
  `Treating_Diagnosis` varchar(1000) NOT NULL,
  `Subj_Body_Assmnt` varchar(1000) NOT NULL,
  `History_of_Presenting_Complaints` varchar(1000) NOT NULL,
  `Current_or_Past_Treatment` varchar(1000) DEFAULT NULL,
  `Medical_and_Family_History` varchar(1000) DEFAULT NULL,
  `Surgical_History` varchar(1000) DEFAULT NULL,
  `Family_History` varchar(1000) DEFAULT NULL,
  `Social_History` varchar(1000) DEFAULT NULL,
  `Medications_and_Allergies` varchar(1000) DEFAULT NULL,
  `Other_Symptoms` varchar(1000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjective_assessments`
--

LOCK TABLES `subjective_assessments` WRITE;
/*!40000 ALTER TABLE `subjective_assessments` DISABLE KEYS */;
/*!40000 ALTER TABLE `subjective_assessments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_details` (
  `User_ID` int NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(100) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `User_Role` int DEFAULT '1001',
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (14,'Ronald','Araujo','araujo@outlook.com','$2b$10$iA8O/hdZ3mfB40g2h/7TAuc575iNkzjJIgRBBA3FKbccbLb2sR0ku',1001),(15,'Aaman','','aaman@gmail.com','$2b$10$xCD.fuZBIDZi6Cp8cX20l..DygiDZkoeosdCPkDZ6kMv/uAYqlBx.',3001),(16,'Georgios','Kamperis','kamperis@gmail.com','$2b$10$cK5QHc5NVHRfw5DwflXZXOGFSXiFH14jUpwYPVsHGNhVQuQ9mKiEG',1001),(17,'Ronald','Araujo','ronal@gmail.com','$2b$10$d2uhersxFaVki75ulVIlOuY0dtTqyR.YC8/Jx3dxMZSpTJTrRIZC2',1001),(18,'Ronald','Kamperis','aman.hussey@gmail.com','$2b$10$ZJJB3C4PzfkCX8w/Usp.uO0myvEB8ZNlTW4Z0Y.gaauSnVhRl.sfS',1001),(19,'Ronald','Araujo','aamanh30@gmail.com','$2b$10$yxdHvhcyCw/1pf.z4unNj.n1hnQ73S/N5FpTvQp9EMJ/GJ7rChujW',1001);
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-06  0:50:00