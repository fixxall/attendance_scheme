import 'package:flutter_filesundefined/index.dart';

class AttendanceSchemeRepository {
  final AttendanceSchemeProvider _attendanceSchemeProvider = AttendanceSchemeProvider();

  AttendanceSchemeRepository();

  void test(bool isError) {
    _attendanceSchemeProvider.test(isError);
  }
}