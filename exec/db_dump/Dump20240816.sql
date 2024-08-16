CREATE DATABASE  IF NOT EXISTS `kidwe` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kidwe`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: i11a808.p.ssafy.io    Database: kidwe
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcement` (
  `is_deleted` bit(1) NOT NULL DEFAULT b'0',
  `is_stored` bit(1) DEFAULT NULL,
  `created_date_time` datetime(6) DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_time` datetime(6) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKibvknlhmqcob0njrw9cghkirb` (`member_id`),
  CONSTRAINT `FKibvknlhmqcob0njrw9cghkirb` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement`
--

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;
INSERT INTO `announcement` VALUES (_binary '',_binary '\0','2024-08-15 18:04:39.946228',1,2,'<p>Test</p>','선생님이 만들었어요.',NULL,NULL),(_binary '\0',_binary '\0','2024-08-15 18:07:47.709520',2,1,'<p>test</p>','test',NULL,NULL),(_binary '\0',_binary '\0','2024-08-15 18:10:26.835143',3,6,'<p>안녕하세요 멀티유치원 학부모님들~ 김원장입니다. </p><p><strong>8월 15일 광복절</strong>은 휴일로 유치원 정상 휴업합니다. </p><p>참고 바랍니다. 감사합니다.</p>','광복절 수업 안내',NULL,NULL),(_binary '',_binary '\0','2024-08-15 18:17:10.034153',4,2,'<p>추가</p>','공지사항 추가',NULL,NULL),(_binary '',_binary '\0','2024-08-15 18:18:31.545992',5,2,'<p>w</p>','w',NULL,NULL),(_binary '\0',_binary '','2024-08-15 19:20:51.504912',6,9,'','여명반 발표수업',NULL,NULL),(_binary '\0',_binary '\0','2024-08-15 20:33:54.921460',8,6,'<p>안녕하세요, 다음주 수요일(8월 21일) 행사 안내드립니다.</p>','다음주 수요일(8월 21일) 행사 안내',NULL,NULL),(_binary '\0',_binary '\0','2024-08-15 23:30:10.263445',9,9,'<p>현재 코로나 환자수가 급증하여 통증을 호소하는 원생이 많아지고 있습니다.</p><p>따라서 각 가정에서는 코로나 예방을 위해 손씻기를 부탁드립니다</p>','건강 안내문',NULL,NULL);
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcement_comment`
--

DROP TABLE IF EXISTS `announcement_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcement_comment` (
  `is_deleted` bit(1) NOT NULL DEFAULT b'0',
  `announcement_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `local_date_time` datetime(6) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `parent_comment_id` bigint DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKi72u02fqknowb9i0h8d13qcis` (`announcement_id`),
  KEY `FKrrjwsw07spc3wnadgm85wh0sj` (`member_id`),
  KEY `FK5fx3ympe1td8h2m2p387ye9q5` (`parent_comment_id`),
  CONSTRAINT `FK5fx3ympe1td8h2m2p387ye9q5` FOREIGN KEY (`parent_comment_id`) REFERENCES `announcement_comment` (`id`),
  CONSTRAINT `FKi72u02fqknowb9i0h8d13qcis` FOREIGN KEY (`announcement_id`) REFERENCES `announcement` (`id`),
  CONSTRAINT `FKrrjwsw07spc3wnadgm85wh0sj` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement_comment`
--

LOCK TABLES `announcement_comment` WRITE;
/*!40000 ALTER TABLE `announcement_comment` DISABLE KEYS */;
INSERT INTO `announcement_comment` VALUES (_binary '\0',2,1,'2024-08-15 18:08:46.915504',1,NULL,'test'),(_binary '\0',2,2,'2024-08-15 18:08:53.801127',1,1,'test'),(_binary '\0',2,3,'2024-08-15 18:08:58.750823',1,1,'testtest'),(_binary '\0',2,4,'2024-08-15 18:26:14.648272',2,NULL,'gg'),(_binary '\0',2,5,'2024-08-15 18:26:16.407629',2,NULL,'sdaasdf'),(_binary '\0',2,6,'2024-08-15 18:26:19.367673',2,1,'sdaf'),(_binary '\0',2,7,'2024-08-15 18:26:23.691420',2,NULL,'sfda'),(_binary '\0',2,8,'2024-08-15 18:33:44.323333',2,NULL,'텟트ㅡ'),(_binary '\0',3,9,'2024-08-15 19:24:49.018529',9,NULL,'광복절날 편안한 하루 되세요~~~'),(_binary '\0',8,10,'2024-08-15 20:34:13.070481',6,NULL,'그렇군요.'),(_binary '\0',8,11,'2024-08-15 20:34:55.313352',6,NULL,'맞습니다.'),(_binary '\0',7,12,'2024-08-15 20:36:27.711069',8,NULL,'선생님 환영합니다! 앞으로 저희 지우 잘 부탁드려요~~~');
/*!40000 ALTER TABLE `announcement_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcement_image`
--

DROP TABLE IF EXISTS `announcement_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcement_image` (
  `announcement_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKje18nosyh1gvyaygbcrcwjjbd` (`announcement_id`),
  CONSTRAINT `FKje18nosyh1gvyaygbcrcwjjbd` FOREIGN KEY (`announcement_id`) REFERENCES `announcement` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement_image`
--

LOCK TABLES `announcement_image` WRITE;
/*!40000 ALTER TABLE `announcement_image` DISABLE KEYS */;
INSERT INTO `announcement_image` VALUES (1,1,'00e37e3d-c46d-4400-bcc1-5e94fa42e070.png'),(3,2,'0bdbbc03-5613-454c-bfa2-cabd6d52c065.jfif');
/*!40000 ALTER TABLE `announcement_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `approval`
--

DROP TABLE IF EXISTS `approval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `approval` (
  `ban_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid_id` bigint DEFAULT NULL,
  `kindergarten_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK9oludu96u73qnjg2w7f2o6nuc` (`kid_id`),
  UNIQUE KEY `UK1hny2rf0cmluyte2kmamunvyq` (`member_id`),
  KEY `FK7bx9corosvsm09vu82eepgpqy` (`ban_id`),
  KEY `FKhcisgd08kcn77c373q6pjg6jp` (`kindergarten_id`),
  CONSTRAINT `FK7bx9corosvsm09vu82eepgpqy` FOREIGN KEY (`ban_id`) REFERENCES `ban` (`id`),
  CONSTRAINT `FKcee2hfphk37j6yk7hxcnmn444` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`),
  CONSTRAINT `FKhcisgd08kcn77c373q6pjg6jp` FOREIGN KEY (`kindergarten_id`) REFERENCES `kindergarten` (`id`),
  CONSTRAINT `FKirykxxl3bue33i91pp4nptnrr` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approval`
--

LOCK TABLES `approval` WRITE;
/*!40000 ALTER TABLE `approval` DISABLE KEYS */;
INSERT INTO `approval` VALUES (4,25,NULL,35,32);
/*!40000 ALTER TABLE `approval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `date` date DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid_id` bigint DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `attended_today` enum('ABSENCE','ATTENDANCE','NOTHING') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKj4kmcmqc1jygkhuq6ekytvpf2` (`kid_id`),
  CONSTRAINT `FKj4kmcmqc1jygkhuq6ekytvpf2` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES ('2024-08-16',19,1,NULL,'NOTHING'),('2024-08-16',20,4,NULL,'NOTHING'),('2024-08-16',21,5,NULL,'NOTHING'),('2024-08-16',22,6,NULL,'NOTHING'),('2024-08-16',23,7,NULL,'NOTHING'),('2024-08-16',24,8,NULL,'NOTHING'),('2024-08-16',25,9,NULL,'NOTHING'),('2024-08-16',26,10,NULL,'NOTHING'),('2024-08-16',27,11,NULL,'NOTHING'),('2024-08-16',28,12,NULL,'NOTHING'),('2024-08-16',29,13,NULL,'NOTHING'),('2024-08-16',30,14,NULL,'NOTHING'),('2024-08-16',31,15,NULL,'NOTHING'),('2024-08-16',32,16,NULL,'NOTHING'),('2024-08-16',33,17,NULL,'NOTHING'),('2024-08-16',34,18,NULL,'NOTHING'),('2024-08-16',35,19,NULL,'NOTHING');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ban`
--

DROP TABLE IF EXISTS `ban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ban` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kindergarten_id` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5sgqnlvj13q2d950a14wy8tpf` (`kindergarten_id`),
  CONSTRAINT `FK5sgqnlvj13q2d950a14wy8tpf` FOREIGN KEY (`kindergarten_id`) REFERENCES `kindergarten` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ban`
--

LOCK TABLES `ban` WRITE;
/*!40000 ALTER TABLE `ban` DISABLE KEYS */;
INSERT INTO `ban` VALUES (1,34,'일반'),(2,34,'이반'),(3,34,'사실사반'),(4,35,'별님반'),(5,35,'햇님반'),(6,35,'달님반'),(7,35,'구름반');
/*!40000 ALTER TABLE `ban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bus`
--

DROP TABLE IF EXISTS `bus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bus` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `car_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bus`
--

LOCK TABLES `bus` WRITE;
/*!40000 ALTER TABLE `bus` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_note`
--

DROP TABLE IF EXISTS `daily_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_note` (
  `is_deleted` bit(1) DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `send_time` datetime(6) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKse42eq9vwgk7di58bhlj7v9fe` (`kid_id`),
  KEY `FKf1vluo5h45xketyuh2o0xklrg` (`member_id`),
  CONSTRAINT `FKf1vluo5h45xketyuh2o0xklrg` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`),
  CONSTRAINT `FKse42eq9vwgk7di58bhlj7v9fe` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_note`
--

LOCK TABLES `daily_note` WRITE;
/*!40000 ALTER TABLE `daily_note` DISABLE KEYS */;
INSERT INTO `daily_note` VALUES (_binary '\0',1,1,2,'2024-08-16 03:18:31.304272','<p>...............</p>'),(_binary '\0',2,1,2,'2024-08-16 03:31:11.204074','<p>2024-08-15 : 남궁동환 부모님께 안녕하세요, 남궁동환 학부모님께 안내드립니다. 오늘의 일정은 아직 제공받지 못하여 정확한 내용을 전달드리지 못해 죄송합니다. 그러나 우리반 아이들은 오늘도 즐거운 시간을 보내고 계실 것으로 기대합니다. 남궁동환 학생의 활발한 참여와 노력에 감사드리며, 항상 건강과 행복이 함께하길 바랍니다. 감사합니다.</p>'),(_binary '\0',3,1,3,'2024-08-16 04:02:10.718898','<p>ggg</p>'),(_binary '\0',4,2,9,'2024-08-16 04:30:00.000000','<p>2024-08-15 : 설움이 부모님께 </p><p>안녕하세요, 설움이 학부모님께 안내 말씀드립니다. </p><p>오늘은 여명반에서는 다양한 활동이 있었습니다. 아이들은 재미있는 놀이시간을 가졌으며, 창의성을 키우는 수업도 진행되었습니다. 아이들은 건강하게 놀이하고 배움을 즐기는 것을 확인할 수 있었습니다. 학부모님들도 아이들의 발전을 지켜보며 더 많은 성장을 기대해주시면 감사하겠습니다. </p><p>감사합니다.</p>'),(_binary '\0',5,4,9,'2024-08-16 05:38:42.421608','<p>sadasdasd</p>'),(_binary '\0',6,4,9,'2024-08-16 18:48:00.000000','<p>2024-08-15 : 정설윤 부모님께</p><p>오늘은 별님반의 일정을 안내해드립니다.</p><p>오전에는 미술활동 시간이 있으며, 정설윤 학생은 색연필을 이용하여 동물 그림을 그릴 예정입니다.</p><p>오후에는 체육시간이 있을 예정이며, 정설윤 학생은 운동화를 준비해 오도록 안내 부탁드립니다.</p><p>학부모님들께서는 학습 장려와 보호자 인증서를 확인해주시기 바랍니다.</p><p>감사합니다.</p>'),(_binary '\0',7,5,9,'2024-08-16 08:11:00.000000','<p>오늘 늦지않게 꼭 챙겨주세요!!!</p>'),(_binary '\0',8,18,26,'2024-08-16 09:17:52.114260','<p>ㄴㄴ</p>'),(_binary '\0',9,18,26,'2024-08-16 09:19:25.386342','<p>ㅎㅎ</p>'),(_binary '\0',10,4,9,'2024-08-16 09:22:03.954883',''),(_binary '\0',11,18,11,'2024-08-16 09:26:08.830497','<p>알림장입니다.</p>'),(_binary '\0',12,4,9,'2024-08-16 09:45:17.298160','<p>2024-08-16 : 정설윤 부모님께</p><p>별님반의 오늘 하루 일정은 재롱잔치입니다. 여명반이 준비한 재롱잔치가 있을 예정입니다.</p><p>정설윤 학생의 오늘의 상황은 다음과 같습니다.</p><p>수연 학생이 등원을 거부했습니다. 또한 점심을 거부하고 체함을 했습니다. 그리고 약을 먹었다고 합니다.</p>'),(_binary '\0',13,4,9,'2024-08-16 09:46:00.427122','<p>2024-08-16 : 정설윤 부모님께</p><p><strong>별님반의</strong> 오늘 하루 일정은 재롱잔치인데, 여명반이 준비한 재롱잔치가 있습니다.</p><p>정설윤 원생의 상황은 등원 시에 거부하는 모습을 보였고, 점심 시간에는 거부하며 체함을 했습니다. 또한, 물약을 먹었다는 메모가 있습니다.</p><p><br></p><p>감사합니다</p>');
/*!40000 ALTER TABLE `daily_note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_note_comment`
--

DROP TABLE IF EXISTS `daily_note_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_note_comment` (
  `is_deleted` bit(1) DEFAULT NULL,
  `created_time` datetime(6) DEFAULT NULL,
  `daily_note_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  `parent_comment_id` bigint DEFAULT NULL,
  `updated_time` datetime(6) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbibj44d9aks8h8wmvo0lg7rwo` (`daily_note_id`),
  KEY `FK5174jrw7dr4vybuaft9g5s403` (`member_id`),
  KEY `FKjtluos1cney3gkg6wkrfuxpna` (`parent_comment_id`),
  CONSTRAINT `FK5174jrw7dr4vybuaft9g5s403` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`),
  CONSTRAINT `FKbibj44d9aks8h8wmvo0lg7rwo` FOREIGN KEY (`daily_note_id`) REFERENCES `daily_note` (`id`),
  CONSTRAINT `FKjtluos1cney3gkg6wkrfuxpna` FOREIGN KEY (`parent_comment_id`) REFERENCES `daily_note_comment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_note_comment`
--

LOCK TABLES `daily_note_comment` WRITE;
/*!40000 ALTER TABLE `daily_note_comment` DISABLE KEYS */;
INSERT INTO `daily_note_comment` VALUES (_binary '\0','2024-08-15 18:31:38.645793',1,1,2,NULL,'2024-08-15 18:31:38.645793','sadf'),(_binary '\0','2024-08-15 18:31:42.084395',1,2,2,1,'2024-08-15 18:31:42.084395','afsda'),(_binary '','2024-08-15 18:31:46.159664',1,3,2,1,'2024-08-15 18:31:46.159664','sdfsdf'),(_binary '\0','2024-08-15 18:31:49.439351',1,4,2,NULL,'2024-08-15 18:31:49.439351','sdffsad'),(_binary '\0','2024-08-15 18:31:57.680622',1,5,2,NULL,'2024-08-15 18:31:57.680622','sdaf'),(_binary '\0','2024-08-15 18:33:19.528763',1,6,2,NULL,'2024-08-15 18:33:19.528763','구래'),(_binary '\0','2024-08-15 18:33:59.120992',1,7,2,NULL,'2024-08-15 18:33:59.120992','ㄴㅇㄻㄴㅇㄹ'),(_binary '\0','2024-08-15 18:34:12.794714',1,8,2,NULL,'2024-08-15 18:34:12.794714','ㅇㄻㄴㅇㄹ'),(_binary '','2024-08-15 18:34:14.648414',1,9,2,NULL,'2024-08-15 18:34:14.648414','ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹㄴㅇㄹ'),(_binary '\0','2024-08-15 18:34:17.925725',1,10,2,NULL,'2024-08-15 18:34:17.925725','ㅁㄴㅇㄻㄴㅇㄹ'),(_binary '\0','2024-08-15 18:34:22.168064',1,11,2,NULL,'2024-08-15 18:34:22.168064','1'),(_binary '\0','2024-08-15 18:34:23.284376',1,12,2,NULL,'2024-08-15 18:34:23.284376','2'),(_binary '\0','2024-08-15 18:34:24.721895',1,13,2,NULL,'2024-08-15 18:34:24.721895','3'),(_binary '\0','2024-08-15 18:34:25.688057',1,14,2,NULL,'2024-08-15 18:34:25.688057','4'),(_binary '\0','2024-08-15 18:34:28.808770',1,15,2,13,'2024-08-15 18:34:28.808770','5'),(_binary '\0','2024-08-15 18:34:41.437101',1,16,2,11,'2024-08-15 18:34:41.437101','6'),(_binary '\0','2024-08-15 18:42:59.039401',1,17,2,9,'2024-08-15 18:42:59.039401','.'),(_binary '\0','2024-08-15 19:44:35.106498',2,18,2,NULL,'2024-08-15 19:44:35.106498','ㄴㅇㅁ'),(_binary '\0','2024-08-15 19:44:36.629255',2,19,2,NULL,'2024-08-15 19:44:36.629255','ㄴㅇㄻ'),(_binary '\0','2024-08-15 19:44:40.302109',2,20,2,19,'2024-08-15 19:44:40.302109','ㅇㄴㄻ'),(_binary '\0','2024-08-15 19:44:41.757246',2,21,2,NULL,'2024-08-15 19:44:41.757246','ㄴㅇㄻ'),(_binary '\0','2024-08-15 19:44:43.900399',2,22,2,18,'2024-08-15 19:44:43.900399','ㄴㄹㅇ');
/*!40000 ALTER TABLE `daily_note_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_note_image`
--

DROP TABLE IF EXISTS `daily_note_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_note_image` (
  `daily_note_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrw6ngbjxfd2da0c87w9bkr6ho` (`daily_note_id`),
  CONSTRAINT `FKrw6ngbjxfd2da0c87w9bkr6ho` FOREIGN KEY (`daily_note_id`) REFERENCES `daily_note` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_note_image`
--

LOCK TABLES `daily_note_image` WRITE;
/*!40000 ALTER TABLE `daily_note_image` DISABLE KEYS */;
INSERT INTO `daily_note_image` VALUES (3,1,'f9ce4903-0661-4929-b254-cee791c4f42c.jpg'),(5,2,'66fce488-0b0e-40fa-8b00-c412a8f9e91e.jpg'),(8,52,'1d1bf1b1-404d-48b8-a588-54b0d9c13bcb.jpg'),(8,53,'101d605a-d80c-421a-a932-86335550f2df.png'),(9,54,'05ecf5ae-7f76-431e-9a5e-501dadaa0085.png'),(9,55,'01bcda12-b1af-44ca-8729-19a595013387.png'),(11,56,'9f94dc6a-d4a0-4d61-a8b8-af2b2192f581.jpg');
/*!40000 ALTER TABLE `daily_note_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_note_image_seq`
--

DROP TABLE IF EXISTS `daily_note_image_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_note_image_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_note_image_seq`
--

LOCK TABLES `daily_note_image_seq` WRITE;
/*!40000 ALTER TABLE `daily_note_image_seq` DISABLE KEYS */;
INSERT INTO `daily_note_image_seq` VALUES (151);
/*!40000 ALTER TABLE `daily_note_image_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kid`
--

DROP TABLE IF EXISTS `kid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kid` (
  `birthday` date DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT b'0',
  `is_take` bit(1) NOT NULL,
  `start_attendance_date` date DEFAULT NULL,
  `ban_id` bigint DEFAULT NULL,
  `bus_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kindergarten_id` bigint DEFAULT NULL,
  `allergies` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `gender` enum('FEMALE','MALE') DEFAULT NULL,
  `kid_status` enum('ACCEPT','DECLINE','NOTHING','PENDING') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtm2iotg8vnth15f4dwit8mysm` (`ban_id`),
  KEY `FKnfavs9ikvp137jp3ofsv619n4` (`bus_id`),
  KEY `FKl7p7qpvl6xowb63u4bjffg5s3` (`kindergarten_id`),
  CONSTRAINT `FKl7p7qpvl6xowb63u4bjffg5s3` FOREIGN KEY (`kindergarten_id`) REFERENCES `kindergarten` (`id`),
  CONSTRAINT `FKnfavs9ikvp137jp3ofsv619n4` FOREIGN KEY (`bus_id`) REFERENCES `bus` (`id`),
  CONSTRAINT `FKtm2iotg8vnth15f4dwit8mysm` FOREIGN KEY (`ban_id`) REFERENCES `ban` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kid`
--

LOCK TABLES `kid` WRITE;
/*!40000 ALTER TABLE `kid` DISABLE KEYS */;
INSERT INTO `kid` VALUES ('2024-08-16',_binary '\0',_binary '\0',NULL,1,NULL,1,34,'알류,메밀,땅콩,대두,밀,호두,오징어,조개류,복숭아,토마토,닭고기,돼지고기,아황산류','남궁동환','dbea3395-f299-459d-9f5d-fbc40939a886.png','MALE','ACCEPT'),('2024-08-16',_binary '',_binary '\0',NULL,4,NULL,2,35,'우유,땅콩,돼지고기','설움이',NULL,'FEMALE','ACCEPT'),('2019-08-02',_binary '\0',_binary '\0',NULL,4,NULL,4,35,'알류,땅콩,대두','정설윤','6a09fa60-3a6a-405f-b153-5c88f3cbf5cc.jpg','FEMALE','ACCEPT'),('2018-01-06',_binary '\0',_binary '\0',NULL,4,NULL,5,35,'메밀,조개류','이영호','14abe771-0d9f-4770-8a3a-87e8ee6c9c5b.jpg','MALE','ACCEPT'),('2018-11-22',_binary '\0',_binary '\0',NULL,5,NULL,6,35,'알류,토마토,쇠고기','박승재',NULL,'MALE','ACCEPT'),('2024-07-09',_binary '\0',_binary '\0',NULL,6,NULL,7,35,'알류','이유미',NULL,'FEMALE','ACCEPT'),('2021-04-14',_binary '\0',_binary '\0',NULL,5,NULL,8,35,'우유,토마토,돼지고기,아황산류','김동훈',NULL,'MALE','ACCEPT'),('2024-08-16',_binary '\0',_binary '\0',NULL,4,NULL,9,35,'우유,땅콩,새우','남수연','37de729c-a590-419b-8b6f-057eba4c7d1f.jpg','FEMALE','ACCEPT'),('2024-08-16',_binary '\0',_binary '\0',NULL,6,NULL,10,35,'메밀','지수아',NULL,'FEMALE','ACCEPT'),('2020-07-01',_binary '\0',_binary '\0',NULL,7,NULL,11,35,'알류,우유,땅콩,아황산류','최수호',NULL,'MALE','ACCEPT'),('2019-08-22',_binary '\0',_binary '\0',NULL,5,NULL,12,35,'토마토,쇠고기,아황산류','이석훈',NULL,'MALE','ACCEPT'),('2018-12-06',_binary '\0',_binary '\0',NULL,4,NULL,13,35,'게','유서준','53fce956-0a7c-4d6b-8e26-4cca4b0af99f.jpg','FEMALE','ACCEPT'),('2020-08-12',_binary '\0',_binary '\0',NULL,5,NULL,14,35,'새우,오징어','강동민',NULL,'FEMALE','ACCEPT'),('2020-07-08',_binary '\0',_binary '\0',NULL,7,NULL,15,35,'알류','윤지수','92001f6e-5d05-4795-898d-2eae3d700d91.jpg','MALE','ACCEPT'),('2024-08-16',_binary '\0',_binary '\0',NULL,6,NULL,16,35,'우유','송지유',NULL,'MALE','ACCEPT'),('2024-08-16',_binary '\0',_binary '\0',NULL,6,NULL,17,35,'땅콩','지성준','53735a7d-7c01-4669-b639-80ba2b02fd5e.jpg','MALE','ACCEPT'),('2024-08-16',_binary '\0',_binary '\0',NULL,6,NULL,18,35,'우유','강지원','1559e242-d948-430e-89b1-ea800ad13c85.jpg','FEMALE','ACCEPT'),('2019-08-01',_binary '\0',_binary '\0',NULL,7,NULL,19,35,'땅콩','정민아','1c8bdc77-2a06-40bf-9014-e9a5009bdb30.jpg','FEMALE','ACCEPT');
/*!40000 ALTER TABLE `kid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kid_member`
--

DROP TABLE IF EXISTS `kid_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kid_member` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1p3a4un9p3pol6yj5rh2j6o3i` (`kid_id`),
  KEY `FK3r1sy1nob06ujanncs0cysvqd` (`member_id`),
  CONSTRAINT `FK1p3a4un9p3pol6yj5rh2j6o3i` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`),
  CONSTRAINT `FK3r1sy1nob06ujanncs0cysvqd` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kid_member`
--

LOCK TABLES `kid_member` WRITE;
/*!40000 ALTER TABLE `kid_member` DISABLE KEYS */;
INSERT INTO `kid_member` VALUES (1,1,3),(4,4,8),(5,5,13),(6,6,14),(7,7,15),(8,8,16),(9,9,17),(10,10,18),(11,11,19),(12,12,20),(13,13,22),(14,14,23),(15,15,24),(16,16,21),(17,17,25),(18,18,26),(19,19,27);
/*!40000 ALTER TABLE `kid_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kindergarten`
--

DROP TABLE IF EXISTS `kindergarten`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kindergarten` (
  `is_vehicle` bit(1) NOT NULL,
  `open_date` date DEFAULT NULL,
  `bus_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `address_detail` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKjk2vbgmnuxep61y9gefxw9ub7` (`bus_id`),
  CONSTRAINT `FK8rkws3lk1o45v4yk8gm9ynukk` FOREIGN KEY (`bus_id`) REFERENCES `bus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kindergarten`
--

LOCK TABLES `kindergarten` WRITE;
/*!40000 ALTER TABLE `kindergarten` DISABLE KEYS */;
INSERT INTO `kindergarten` VALUES (_binary '\0',NULL,NULL,1,'서울특별시 강남구 명일로 42',NULL,'명일유치원','02-452-0923',NULL),(_binary '\0',NULL,NULL,2,'대구광역시 동구 율하동로 55',NULL,'대구율원초등학교병설유치원','053-232-5490',NULL),(_binary '\0',NULL,NULL,3,'대구광역시 동구 안심로 300',NULL,'대구가톨릭대학교부설유치원','053-962-6161',NULL),(_binary '\0',NULL,NULL,4,'대구광역시 동구 방천로3길 19',NULL,'대구불로초등학교병설유치원','053-232-6551',NULL),(_binary '\0',NULL,NULL,5,'대구광역시 동구 송라로 123',NULL,'대구동신초등학교병설유치원','053-232-1772',NULL),(_binary '\0',NULL,NULL,6,'대구광역시 동구 동호로7길 17',NULL,'대구강동초등학교병설유치원','053-232-5081',NULL),(_binary '\0',NULL,NULL,7,'서울특별시 강남구 삼성로66길 10',NULL,'한양유치원','02-574-6635',NULL),(_binary '\0',NULL,NULL,8,'서울특별시 강남구 청담로 43',NULL,'그린유치원','02-549-2104',NULL),(_binary '\0',NULL,NULL,9,'서울특별시 강남구 태성로 65',NULL,'서울태성초등학교병설유치원','02-578-9820',NULL),(_binary '\0',NULL,NULL,10,'서울특별시 강남구 서초대로 74',NULL,'서초유치원','02-577-9211',NULL),(_binary '\0',NULL,NULL,11,'서울특별시 강남구 삼성로 250',NULL,'삼성초등학교병설유치원','02-555-0078',NULL),(_binary '\0',NULL,NULL,12,'서울특별시 강남구 청운로 16',NULL,'서울청운초등학교병설유치원','02-554-1116',NULL),(_binary '\0',NULL,NULL,13,'서울특별시 강남구 헌릉로 19',NULL,'솔밭유치원','02-562-7280',NULL),(_binary '\0',NULL,NULL,14,'서울특별시 강남구 논현로96길 12',NULL,'정동유치원','02-545-9892',NULL),(_binary '\0',NULL,NULL,15,'서울특별시 강남구 교동로 33',NULL,'서울교동초등학교병설유치원','02-546-4822',NULL),(_binary '\0',NULL,NULL,16,'서울특별시 강남구 논현로54길 16',NULL,'서울미래유치원','02-546-8590',NULL),(_binary '\0',NULL,NULL,17,'대구광역시 동구 팔공로68길 4-5',NULL,'호수유치원','053-981-6666',NULL),(_binary '\0',NULL,NULL,18,'대구광역시 동구 팔공로 220-4',NULL,'대구해서초등학교병설유치원','053-232-1128',NULL),(_binary '\0',NULL,NULL,19,'대구광역시 동구 아양로8길 31-4',NULL,'사과나무유치원','053-951-8338',NULL),(_binary '\0',NULL,NULL,20,'대구광역시 동구 해동로 219',NULL,'동촌성모유치원','053-981-5248',NULL),(_binary '\0',NULL,NULL,21,'대구광역시 동구 안심로51길 13-2',NULL,'자연동화유치원','053-962-5222',NULL),(_binary '\0',NULL,NULL,22,'대구광역시 동구 방촌로17길 26',NULL,'산돌유치원','053-201-2201',NULL),(_binary '\0',NULL,NULL,23,'대구광역시 동구 신암북로7길 75',NULL,'행복유치원','053-952-1133',NULL),(_binary '\0',NULL,NULL,24,'대구광역시 동구 화랑로 558',NULL,'아인유치원','053-964-0811',NULL),(_binary '\0',NULL,NULL,25,'대구광역시 동구 화랑로88길 80',NULL,'우리나현유치원','053-981-3220',NULL),(_binary '\0',NULL,NULL,26,'대구광역시 동구 팔공로101길 55',NULL,'은하수유치원','053-981-6021',NULL),(_binary '\0',NULL,NULL,27,'대구광역시 동구 반야월로 208-1',NULL,'금빛유치원','053-964-8337',NULL),(_binary '\0',NULL,NULL,28,'대구광역시 동구 과학로 51',NULL,'대구새론유치원','053-232-9700',NULL),(_binary '\0',NULL,NULL,29,'대구광역시 동구 안심로7길 21',NULL,'온누리유치원','053-962-0081',NULL),(_binary '\0',NULL,NULL,30,'대구광역시 동구 파계로 525-11',NULL,'대구서촌초등학교병설유치원','053-232-2344',NULL),(_binary '\0',NULL,NULL,31,'대구광역시 동구 옻골로 50',NULL,'대구해안초등학교병설유치원','053-232-0983',NULL),(_binary '\0',NULL,NULL,32,'대구광역시 동구 화랑로25길 21',NULL,'금성유치원','053-756-7227',NULL),(_binary '\0',NULL,NULL,33,'대구광역시 동구 공산로 57',NULL,'대구공산초등학교병설유치원','053-232-0523',NULL),(_binary '\0','2024-08-15',NULL,34,'경기 양주시 화합로 1356','바로 앞','강남스타일유치원','031-123-4567','11450'),(_binary '\0','2024-08-15',NULL,35,'서울 강남구 테헤란로 212','멀티캠퍼스 1701호','멀티유치원','031-123-1234','06220');
/*!40000 ALTER TABLE `kindergarten` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_consent`
--

DROP TABLE IF EXISTS `leave_consent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_consent` (
  `created_date` date DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL DEFAULT b'0',
  `leave_date` date DEFAULT NULL,
  `leave_time` time(6) DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid_id` bigint DEFAULT NULL,
  `emergency_contact` varchar(255) DEFAULT NULL,
  `emergency_relationship` varchar(255) DEFAULT NULL,
  `guardian_contact` varchar(255) DEFAULT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `guardian_relationship` varchar(255) DEFAULT NULL,
  `leave_method` varchar(255) DEFAULT NULL,
  `sign_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1kvenydbxw1t55xhgg730s62d` (`kid_id`),
  CONSTRAINT `FK1kvenydbxw1t55xhgg730s62d` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_consent`
--

LOCK TABLES `leave_consent` WRITE;
/*!40000 ALTER TABLE `leave_consent` DISABLE KEYS */;
INSERT INTO `leave_consent` VALUES ('2024-08-15',_binary '','2024-08-17','16:00:00.000000',1,1,'123123123','없음','010-4355-4229','최동환','아빠','1','af817873-aa3f-4808-8d5e-67d4ba80cafc.png'),('2024-08-15',_binary '\0','2024-08-18','18:00:00.000000',2,1,'1','없음','010-4355-4229','최동환','아빠','1','9083d471-cd2e-4c8c-a4dc-c2287622cb7c.png'),('2024-08-15',_binary '\0','2024-08-18','16:30:00.000000',3,4,'010-3434-1212','부','010-1212-3434','설움엄마','모','부모(제가)가 데리러 가겠습니다','0d177a9b-dbfb-47c0-a303-7d5ecd34ef4c.png'),('2024-08-15',_binary '\0','2024-08-18','15:00:00.000000',4,6,'010-5969-7395','부','010-9375-9048','임한수','삼촌','삼촌이 데리러 갈 거에요!','73c73e1e-64bb-4ea1-8adc-7f51e5ee41c6.png'),('2024-08-15',_binary '\0','2024-08-16','16:00:00.000000',5,5,'010-1357-2479','부','010-1357-2479','강혁준','부','부모가 데릴러갈게요','94717889-1d8c-49b9-8a5c-6679dde3ed1b.png'),('2024-08-15',_binary '\0','2024-08-16','16:00:00.000000',6,4,'010-8732-1987','부','010-1234-5678','서지우','모','본인','7b6a157c-9019-4cc6-8cf4-9caa6808aa32.png'),('2024-08-15',_binary '\0','2024-08-16','16:00:00.000000',7,5,'010-7594-7122','부','010-7594-7122','강혁준','모','조부모님이 데릴러 가실거에요','ad86d899-0fa3-40e0-b913-9cfd6f047b9a.png'),('2024-08-16',_binary '\0','2024-08-16','16:00:00.000000',8,4,'1010666','오','010152636','서지우','ㅁㅎ','제거 데리러 가요','87430505-3eed-436a-8628-b741c3de9133.png');
/*!40000 ALTER TABLE `leave_consent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medication`
--

DROP TABLE IF EXISTS `medication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medication` (
  `is_deleted` bit(1) NOT NULL DEFAULT b'0',
  `medication_execute_due_date` date DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid_id` bigint DEFAULT NULL,
  `medication_created_date_time` datetime(6) DEFAULT NULL,
  `capacity` varchar(255) DEFAULT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `medication_execute_time` varchar(255) DEFAULT NULL,
  `medicine_image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number_of_doses` varchar(255) DEFAULT NULL,
  `others` varchar(255) DEFAULT NULL,
  `sign_url` varchar(255) DEFAULT NULL,
  `storage_method` varchar(255) DEFAULT NULL,
  `symptom` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1xdto394h5b9s6vn80agcjriy` (`kid_id`),
  CONSTRAINT `FK1xdto394h5b9s6vn80agcjriy` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medication`
--

LOCK TABLES `medication` WRITE;
/*!40000 ALTER TABLE `medication` DISABLE KEYS */;
INSERT INTO `medication` VALUES (_binary '\0','2024-08-16',1,1,'2024-08-15 17:55:33.305162','10mg','최동환','식사 직전','7a744095-e5a5-4e53-8f37-861f074072a3.png','땅콩약','1일 2회분','비고 나는 자기주장이 강해','bae85a08-5840-463a-a943-b2cfdbf8c8c8.png','실온','땅콩','물약'),(_binary '\0','2024-08-18',2,1,'2024-08-15 17:56:59.785729','1','최동환','식사 직전','a3b728f4-8c91-40b6-a84e-66144859202f.png','1','1','1','b1fd518e-3f11-40f0-87b5-0f58491e545d.png','보관','땅콩','1'),(_binary '\0','2024-08-17',3,4,'2024-08-15 19:14:09.982380','1봉지','설움엄마','식후 30분',NULL,'감기약','1일 3회','아이가 잘 먹지 않으려고 해요ㅠㅠ 잘 부탁드립니다','e95dd127-84f7-454b-9cca-37a2e2a95460.png','실온','감기','물약'),(_binary '\0','2024-08-16',4,1,'2024-08-15 19:27:18.616177','sdas','최동환','식사 직전','5f1a50a7-fa94-4234-a803-f4092532b7de.jpg','adfs','adfsa','dsaf','0c8899cb-a834-42b7-adc4-7d631202fcbd.png','실온','asdf','as'),(_binary '\0','2024-08-18',5,4,'2024-08-15 20:37:43.780533','1봉지','서지우','식후 30분',NULL,'감기약','1일 3회','아이가 잘 먹을 수 있게 독려 부탁드려요 ㅠㅠ','b66f45c6-6ce6-4998-a5c8-9b5480359155.png','실온','감기','물약'),(_binary '\0','2024-08-16',6,6,'2024-08-15 22:01:30.436599','1봉지','임한수','8시간 간격',NULL,'알러엔','8시간 간격','.','eea8cbeb-9177-48b6-b4b0-479db4e04b29.png','실온','알레르기약','가루약'),(_binary '','2024-08-17',7,5,'2024-08-15 22:35:00.421991','1회','강혁준','식사 직전',NULL,'알레르기 완화제','1일 2회','.','210619a2-bb63-4ac8-845f-5e2bbbcf6a2e.png','실온','알레르기','가루약'),(_binary '\0','2024-08-17',8,5,'2024-08-15 22:37:51.941957','1숟가락','강혁준','취침 전',NULL,'알레르기 완화제','1일 1회','아이가 요즘 알레르기가 심하네요','e0aec587-2d75-42d3-804c-a3907bc1447d.png','실온','알레르기','가루약'),(_binary '\0','2024-08-18',9,4,'2024-08-15 23:08:23.785482','1','서지우','식후 30분',NULL,'알레르기 완화제','1','.','95250c27-ff80-46a8-aebe-ca08abd8c018.png','실온','알레르기','가루'),(_binary '\0','2024-08-16',10,4,'2024-08-15 23:10:41.385353','1','서지우','취침 전',NULL,'감기약','1',',','cf43a3b2-ec5a-4e5e-8c7b-afac37d6627c.png','실온','감기','가루약'),(_binary '\0','2024-08-16',11,18,'2024-08-15 23:49:54.094264','ㅇ',' 송지서','식사 직후','1a30c93b-eee5-4457-94f6-ca5b7a44e323.jpg','ㅇ','ㅇ','ㅇ','788cdfaa-2362-44cb-aa12-7b1f1d081589.png','실온','발열, 감기','ㅇ'),(_binary '\0','2024-08-17',12,5,'2024-08-15 23:55:45.548793','1알','강혁준','식사 직후','9c06574b-70f3-4b0e-99ae-b1fbf7caf7e7.jpeg','감기약','1알 2회','투약 부탁드립니다.','46062a81-cb5a-41ca-8f9f-909f8e66c078.png','실온','감기','알약'),(_binary '\0','2024-08-16',13,5,'2024-08-16 00:01:09.455803','2회','강혁준','식사 직전','a3b7b96b-457d-4656-8555-a8c5563d6868.jpg','감기약','1일 3회분','투약','d7d3fce1-8d8d-4ce0-ba36-546adbe79e29.png','실온','감기','알약'),(_binary '\0','2024-08-16',14,4,'2024-08-16 00:43:24.575443','1','서지우','식후 30분',NULL,'몸살약','1','녹여 먹여주세요','32b3aa4e-e461-4c29-989a-74bae17afcf6.png','보관','아파요','가루약');
/*!40000 ALTER TABLE `medication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `is_deleted` bit(1) DEFAULT b'0',
  `ban_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kindergarten_id` bigint DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `notification_token` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `member_status` enum('ACCEPT','DECLINE','NOTHING','PENDING') DEFAULT NULL,
  `role` enum('ROLE_DIRECTOR','ROLE_GUARDIAN','ROLE_TEACHER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKl3kyutnvp0qpwxme8p032cqug` (`ban_id`),
  KEY `FK3rn3xl97iyt2r3d4bxststvg6` (`kindergarten_id`),
  CONSTRAINT `FK3rn3xl97iyt2r3d4bxststvg6` FOREIGN KEY (`kindergarten_id`) REFERENCES `kindergarten` (`id`),
  CONSTRAINT `FKl3kyutnvp0qpwxme8p032cqug` FOREIGN KEY (`ban_id`) REFERENCES `ban` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (_binary '\0',NULL,1,34,'d@d.dd','박동환',NULL,'$2a$10$NYrJjNAJ6WhZVI6mx2NlxuRKalTEFR/7M4kIP.uYD2tcrxI3eS5qi','7d623787-67fd-490b-8264-07ffa4cc27c0.jpg','010-1234-5678','ACCEPT','ROLE_DIRECTOR'),(_binary '\0',1,2,34,'t@t.tt','김동환',NULL,'$2a$10$FJVPtUSqVcotZtPrVBw7fuOe.oNkDV1Q9VRxuyySTZJaNi8gGlxFO',NULL,'010-1111-1111','ACCEPT','ROLE_TEACHER'),(_binary '\0',NULL,3,NULL,'g@g.gg','최동환',NULL,'$2a$10$n4k1Mm0vCX4ncJPwMUHPPeimuaAGInwC456AQ9UBBsCVvXHgldiBm','f57e910a-d8fa-4854-95b9-e85e3db23e82.png','010-4156-4568','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,4,NULL,'psw1253@naver.com','박상우',NULL,'$2a$10$XR/GwWhKNsFcs/xWHH4jAOP/ppNVmM/PXezfTx..8t2ZXQhkmxVdu',NULL,'010-2409-8445','NOTHING','ROLE_TEACHER'),(_binary '\0',NULL,5,NULL,'g1@g.gg','g1',NULL,'$2a$10$BlQJtv6CZ0KKoEHN/VfxwOU1qB0tqTg9nw9HeK7MzmJWP1T.ytGoO',NULL,'010-1234-1234','NOTHING','ROLE_GUARDIAN'),(_binary '\0',NULL,6,35,'dir123@ssafy.com','박동환',NULL,'dir123',NULL,'010-1234-1234','ACCEPT','ROLE_DIRECTOR'),(_binary '\0',NULL,7,NULL,'guar123@ssafy.com','guar123',NULL,'guar123',NULL,'010-4321-4321','DECLINE','ROLE_GUARDIAN'),(_binary '\0',NULL,8,NULL,'guar1212@ssafy.com','서지우',NULL,'guar1212','69d8c1a3-a679-4038-b237-446a831003c6.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',4,9,35,'tea123@ssafy.com','이유아',NULL,'tea123','a5bc50b9-5190-4fc2-b926-e388235ee700.jpg','010-2222-2222','ACCEPT','ROLE_TEACHER'),(_binary '\0',5,10,35,'tea1234@ssafy.com','이서연',NULL,'tea1234',NULL,'010-4984-4831','ACCEPT','ROLE_TEACHER'),(_binary '\0',6,11,35,'tea124@ssafy.com','김민서',NULL,'tea124',NULL,'010-4876-4231','ACCEPT','ROLE_TEACHER'),(_binary '\0',7,12,35,'tea125@ssafy.com','최민준',NULL,'tea125',NULL,'010-4597-4891','ACCEPT','ROLE_TEACHER'),(_binary '\0',NULL,13,NULL,'guar124@ssafy.com','강혁준',NULL,'guar124','299e8549-6450-4a88-a64f-f350bc65db3e.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,14,NULL,'hansoo@gmail.com','임한수',NULL,'hansoo','bdbbcde8-fe74-482c-b63c-e91f11e90ed6.jpg','010-6245-2523','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,15,NULL,'jiyeon@ssafy.com','유지연',NULL,'jiyeon',NULL,'010-2344-4322','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,16,NULL,'jimin23@gmail.com','이지민',NULL,'jimin23','607758bf-258d-4819-ae6c-d0b474d29bf6.jpg','010-7924-1652','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,17,NULL,'guar126@ssafy.com','이은정',NULL,'guar126','471f70c9-474b-4dae-b70a-8f5973b66135.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,18,NULL,'jui@ssafy.com','정주이',NULL,'jui',NULL,'010-7890-0987','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,19,NULL,'wlsghk@ssafy.com','박진화',NULL,'wlsgh',NULL,'010-3627-3822','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,20,NULL,'bum@naver.com','이밤재',NULL,'bum','fb0b384c-042a-4266-b62d-87b840d5dcc6.jpg','010-6246-3524','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,21,NULL,'suyeong@ssafy.com','박수영',NULL,'suyeong',NULL,'010-2323-2323','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,22,NULL,'guar131@ssafy.com','지수진',NULL,'guar131','99215a72-7b2a-4a22-8a7c-8f91a7382e67.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,23,NULL,'young@gmail.com','임인영',NULL,'young','098a8a17-b726-4167-84b2-ee06a574aeb3.jpg','010-7256-6733','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,24,NULL,'alswjd@ssafy.com','박민정',NULL,'alswjd','da2bfe00-9f91-456e-bff3-155b1162e9e2.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,25,NULL,'seongyoon@ssafy.com','지성윤',NULL,'seongyoon','8fdb7677-2729-4f29-b7da-7daee7563852.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,26,NULL,'jiseo@ssafy.com',' 송지서',NULL,'jiseo','9e12fe9f-925f-4dac-bfe2-99bf563162e7.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,27,NULL,'wnsghd@ssafy.com','정준홍',NULL,'wnsghd','5174d165-2e40-4cae-a5b1-52bbb9b4c151.jpg','010-2222-2222','ACCEPT','ROLE_GUARDIAN'),(_binary '\0',NULL,28,NULL,'znxn456@naver.com','park',NULL,'6c6ce09bcdd5d2be5ddf3efce9503f13dbab23a825a9c6296d5c1ddefc3c3531a6c4f2ff59c3a957',NULL,'010-000-000','NOTHING','ROLE_TEACHER'),(_binary '\0',NULL,29,NULL,'znxn4561@naver.com','park',NULL,'bf9e9b4c10847e037d145cfcee8806a39cff54ab48710fa827fdbbffa0d4ac0e98ec506648ca0a9f',NULL,'010-000-000','NOTHING','ROLE_TEACHER'),(_binary '\0',NULL,30,NULL,'znxn45611@naver.com','park',NULL,'donghwan1.',NULL,'010-000-000','NOTHING','ROLE_TEACHER'),(_binary '\0',NULL,31,NULL,'tea3333@ssafy.com','이유아',NULL,'$2a$10$20uedxK6iOqodgioNQfzleWDydGGMD.BxnnjsptmDzVWXhb0InFjy',NULL,'010-3333-4567','NOTHING','ROLE_GUARDIAN'),(_binary '\0',NULL,32,NULL,'tea333@ssafy.com','이유아',NULL,'$2a$10$pVMnwA2g7lXCp94CTA6DkeU3zVRFTBuIs6Dt4KecusQrxJtkLGDVG',NULL,'010-3333-4444','PENDING','ROLE_TEACHER'),(_binary '\0',NULL,33,NULL,'test@gmail.com','testtest',NULL,'Qwer1234!',NULL,'010-1234-5678','NOTHING','ROLE_GUARDIAN');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `is_deleted` bit(1) NOT NULL,
  `menu_date` date DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kindergarten_id` bigint DEFAULT NULL,
  `dinner` varchar(255) DEFAULT NULL,
  `dinner_allergies` varchar(255) DEFAULT NULL,
  `lunch` varchar(255) DEFAULT NULL,
  `lunch_allergies` varchar(255) DEFAULT NULL,
  `snack` varchar(255) DEFAULT NULL,
  `snack_allergies` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKeid30qyvg5ycr37nlq66wtm7g` (`kindergarten_id`),
  CONSTRAINT `FKeid30qyvg5ycr37nlq66wtm7g` FOREIGN KEY (`kindergarten_id`) REFERENCES `kindergarten` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (_binary '\0','2024-08-16',1,34,'정말 이것저것','알류,우유,메밀,땅콩,대두,밀,잣,호두,게,새우,오징어,고등어,조개류,복숭아,토마토,닭고기,돼지고기,쇠고기,아황산류','미역국, 미역줄기, 미역밥, 땅콩잼','땅콩','이것저것, 저것저것','알류,우유,메밀,땅콩,대두,밀,잣,게,새우,오징어,조개류,복숭아,토마토'),(_binary '','2024-08-15',2,34,'','','Test','알류,우유,땅콩','',''),(_binary '\0','2024-08-16',3,35,'소고기볶음','쇠고기','현미밥, 미역국, 단무지, 소세지, 배추김치','잣,돼지고기','복숭아, 우유','우유,복숭아'),(_binary '\0','2024-08-15',4,35,'','','수수밥, 참치김칫국, 버섯돈육볶음, 숙주나물, 깍두기','돼지고기','수리취떡, 식혜','밀'),(_binary '\0','2024-08-14',5,35,'','','옥수수밥, 연포탕, 돈육피망볶음, 견과류멸치조림, 배추김치','땅콩,돼지고기','공중떡볶이, 메실차','밀');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `push_notification`
--

DROP TABLE IF EXISTS `push_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `push_notification` (
  `is_checked` bit(1) DEFAULT b'0',
  `is_deleted` bit(1) DEFAULT b'0',
  `create_date_time` datetime(6) DEFAULT NULL,
  `id` bigint NOT NULL,
  `member_id` bigint DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq8bp36dg2wgpbajvnw3nvy59x` (`member_id`),
  CONSTRAINT `FKq8bp36dg2wgpbajvnw3nvy59x` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `push_notification`
--

LOCK TABLES `push_notification` WRITE;
/*!40000 ALTER TABLE `push_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `push_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `push_notification_seq`
--

DROP TABLE IF EXISTS `push_notification_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `push_notification_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `push_notification_seq`
--

LOCK TABLES `push_notification_seq` WRITE;
/*!40000 ALTER TABLE `push_notification_seq` DISABLE KEYS */;
INSERT INTO `push_notification_seq` VALUES (1);
/*!40000 ALTER TABLE `push_notification_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `created_time` time(6) DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `ban_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kindergarten_id` bigint DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `schedule_type` enum('ALLNOTICE','CLASS','EVENT') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsgsvsedp0rlvuwfb4oyapj94d` (`ban_id`),
  KEY `FKiayr2ycr1bkcqf9ag60e8orm4` (`kindergarten_id`),
  CONSTRAINT `FKiayr2ycr1bkcqf9ag60e8orm4` FOREIGN KEY (`kindergarten_id`) REFERENCES `kindergarten` (`id`),
  CONSTRAINT `FKsgsvsedp0rlvuwfb4oyapj94d` FOREIGN KEY (`ban_id`) REFERENCES `ban` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES ('18:19:23.862000','2024-08-16',1,1,34,'나와라','나와라','EVENT'),('19:22:48.390000','2024-08-21',4,2,35,'여명반 학부모 참관 수업','참관수업','CLASS'),('19:23:14.378000','2024-08-16',4,3,35,'여명반이 준비한 재롱잔치','재롱잔치','EVENT'),('19:54:03.659000','2024-08-16',NULL,4,35,'아침 건강 운동','운동','ALLNOTICE'),('20:32:09.483000','2024-08-16',NULL,5,35,'바깥 놀이(소집단 활동)','야외 활동','ALLNOTICE'),('20:32:59.483000','2024-08-16',NULL,6,35,'자기 소개와 이야기 나누기','소통','ALLNOTICE'),('20:56:51.358000','2024-08-16',NULL,7,35,'점심식사','점심','ALLNOTICE'),('21:55:19.466000','2024-08-26',4,8,35,'물놀이 체험','소풍','EVENT');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stop`
--

DROP TABLE IF EXISTS `stop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stop` (
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `bus_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FKodg6dyejcti2hqrxhea95xkxl` (`bus_id`),
  CONSTRAINT `FKodg6dyejcti2hqrxhea95xkxl` FOREIGN KEY (`bus_id`) REFERENCES `bus` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stop`
--

LOCK TABLES `stop` WRITE;
/*!40000 ALTER TABLE `stop` DISABLE KEYS */;
/*!40000 ALTER TABLE `stop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote`
--

DROP TABLE IF EXISTS `vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vote` (
  `end_date` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `announcement_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKhsd3a3l55i9qvondp3qxdpxgq` (`announcement_id`),
  CONSTRAINT `FK8nhoj270imbseslu1l2p0r9aw` FOREIGN KEY (`announcement_id`) REFERENCES `announcement` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vote`
--

LOCK TABLES `vote` WRITE;
/*!40000 ALTER TABLE `vote` DISABLE KEYS */;
/*!40000 ALTER TABLE `vote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote_item`
--

DROP TABLE IF EXISTS `vote_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vote_item` (
  `value` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vote_id` bigint DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKky2h5qevbsp1vtwsmjig0mnvt` (`vote_id`),
  CONSTRAINT `FKky2h5qevbsp1vtwsmjig0mnvt` FOREIGN KEY (`vote_id`) REFERENCES `vote` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vote_item`
--

LOCK TABLES `vote_item` WRITE;
/*!40000 ALTER TABLE `vote_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `vote_item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-16 10:19:57
